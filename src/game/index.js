import * as PIXI from 'pixi.js';
import World from './world';
import {registerFont} from './assets/fonts';
import angle from 'usfl/math/angle';
import distance from 'usfl/math/distance';
import SoundPlayer from './utils/sound-player';
import images from './assets/images';
import sounds from './assets/sounds';

const removeFolderNames = json => {
    return Object.assign(json, {
        frames: Object.keys(json.frames).reduce((ob, key) => {
            ob[key.split('/').pop()] = json.frames[key];
            return ob;
        }, {})
    });
};
// import as js ob
const spritesJSON = removeFolderNames(require('./assets/images/textures/objects0.json'));

global.PIXI = PIXI;

export default class Game {
    constructor(el) {
        this.isDown = false;

        const {width, height} = el.getBoundingClientRect();
        const resolution = window.devicePixelRatio || 1;

        const app = new PIXI.Application({
            backgroundColor: 0xE0F0FA,
            autoStart: false,
            roundPixels: true,
            transparent: true,
            antialias: false,
            forceFXAA: false,
            resolution,
            width,
            height
        });
        this.app = app;
        this.el = el;

        this.el.appendChild(app.view);
        app.view.style.width = '100%';
        app.view.style.height = '100%';
        app.view.style.cursor = 'pointer';

        app.stage.interactive = true;
        app.stage.hitArea = new PIXI.Rectangle(0, 0, width, height);
        app.stage.on('pointerdown', event => {
            app.view.style.cursor = 'all-scroll';
            this.touchDown(event.data.global);
        });
        app.stage.on('pointermove', event => this.touchMove(event.data.global));
        app.stage.on('pointerup', event => {
            app.view.style.cursor = 'pointer';
            this.touchUp(event.data.global);
        });

        window.addEventListener('resize', () => this.resize());

        this.dims = this.updateDims();

        this.vec = {x: 0, y: 0, rotation: 0};

        this.touchOrigin = {x: 0, y: 0};

        this.load(app, images);
    }

    load(app, resources) {

        SoundPlayer.load(sounds).then(() => {
            console.log('PLAY SOUND!');
            SoundPlayer.stop('music');
            SoundPlayer.play('music', true);
        });

        console.log('Object.keys(resources)', Object.keys(resources));

        Object.keys(resources).map(key =>
            app.loader.add(key, resources[key])
        );

        app.loader.load((loader, assets) => {
            // parse fonts
            registerFont(assets.fontPng.texture);
            // parse spritesheets
            const spriteSheet = assets.objects0;
            const sheet = new PIXI.Spritesheet(spriteSheet.texture.baseTexture, spritesJSON);

            sheet.parse(textures => {
                console.log('Spritesheet parsed!');
                console.log(Object.keys(textures));

                this.onLoad(app);
            });
        });
    }

    onLoad(app) {
        this.updateDims();
        this.world = new World(app, this.dims);
        this.resize();

        app.start();
        app.ticker.remove(this.update);
        app.ticker.add(this.update);
    }

    update = delta => {
        this.world.update(delta, this.vec, this.touchOrigin);

        if (!this.isDown) {
            this.vec.x *= 0.9;
            this.vec.y *= 0.9;
            if (Math.abs(this.vec.x) < 0.005) {
                this.vec.x = 0;
            }
            if (Math.abs(this.vec.y) < 0.005) {
                this.vec.y = 0;
            }
        }
    }

    pause = () => {
        console.log('Game.pause');
        SoundPlayer.stop('music');
        this.app.ticker.remove(this.update);
    }

    resume = () => {
        console.log('Game.resume');
        if (this.world) {
            SoundPlayer.stop('music');
            SoundPlayer.play('music', true);
            this.app.ticker.remove(this.update);
            this.app.ticker.add(this.update);
        }
    }

    touchUp = () => {
        this.isDown = false;
    }

    touchDown = point => {
        this.isDown = true;

        this.touchOrigin.x = point.x;
        this.touchOrigin.y = point.y;
    }

    touchMove = point => {
        if (!this.isDown) {
            return;
        }
        const {vW, vH} = this.dims;
        const {touchOrigin} = this;

        const rotation = angle(touchOrigin.x, touchOrigin.y, point.x, point.y);
        const maxDist = Math.min(vW, vH) / 4;
        const dist = Math.min(distance(touchOrigin.x, touchOrigin.y, point.x, point.y), maxDist);
        const force = dist / maxDist;

        const speed = 10;
        this.vec.x = Math.cos(rotation) * force * speed;
        this.vec.y = Math.sin(rotation) * force * speed;
        this.vec.rotation = rotation;
    }

    updateDims = () => {
        if (!(this.app && this.app.renderer)) {
            return {};
        }

        const {width, height, resolution} = this.app.renderer;
        const vW = width / resolution;
        const vH = height / resolution;
        const center = {
            x: vW / 2,
            y: vH / 2
        };

        this.dims = {
            vW,
            vH,
            resolution,
            width,
            height,
            center
        };

        return this.dims;
    }

    resize() {
        const {width, height} = this.el.getBoundingClientRect();
        this.app.renderer.resize(width, height);
        this.world.resize(this.updateDims());
        this.app.stage.hitArea.width = width;
        this.app.stage.hitArea.height = height;
    }
}
