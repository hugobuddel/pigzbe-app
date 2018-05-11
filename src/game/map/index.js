import {Container} from 'pixi.js';
import TileMap from '../tiled/tile-map';
import linkedList from 'usfl/linked-list';
import SoundPlayer from '../utils/sound-player';

const mapJSON = require('../assets/maps/pigzbe_game.json');

function intersects(obA, obB) {
    return !(obB.left >= obA.right ||
           obB.right <= obA.left ||
           obB.top >= obA.bottom ||
           obB.bottom <= obA.top);
}

export default class Map {
    constructor(app, dims) {
        this.dims = dims;

        this.createWorld(app, dims);
    }

    createWorld(app, dims) {
        const {vW, vH} = dims;

        const container = new Container();
        app.stage.addChild(container);

        const map = new TileMap(mapJSON);

        // console.log('layers', Object.keys(map.layer));

        this.coins = linkedList(map.layer.coins_A.objects.concat(map.layer.coins_B.objects));

        const level = map.render();
        container.addChild(level);

        container.position.x = (vW - map.width) / 2;
        container.position.y = (vH - map.height) / 2;

        this.map = map;
        this.container = container;
    }

    containWorld() {
        const {vW, vH} = this.dims;

        if (this.container.position.x > 0) {
            this.container.position.x = 0;
        }

        const minX = vW - this.map.width;
        if (this.container.position.x < minX) {
            this.container.position.x = minX;
        }

        if (this.container.position.y > 0) {
            this.container.position.y = 0;
        }

        const minY = vH - this.map.height;
        if (this.container.position.y < minY) {
            this.container.position.y = minY;
        }
    }

    update(delta, vec) {
        this.container.position.x -= vec.x * delta;
        this.container.position.y -= vec.y * delta;

        this.containWorld();

        const relX = Math.abs(this.container.position.x) + this.dims.center.x;
        const relY = Math.abs(this.container.position.y) + this.dims.center.y;
        const hitRect = {
            top: relY - 25,
            bottom: relY + 25,
            left: relX - 35,
            right: relX + 35,
        };

        let coin = this.coins.first;
        while (coin) {
            const next = coin.next;
            const hit = intersects(coin, hitRect);
            if (hit) {
                // coin.sprite.tint = 0xff0000;
                coin.sprite.parent.removeChild(coin.sprite);
                this.coins.remove(coin);
                SoundPlayer.play('notificationCoinsCaptured');
            }
            coin = next;
        }
    }

    resize(dims) {
        this.dims = dims;
        this.containWorld();
    }
}
