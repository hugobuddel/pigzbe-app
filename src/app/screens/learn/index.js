import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import ButtonIcon from '../../components/button-icon';
import Counter from '../../components/game-wollo';
import styles from './styles';
import images from './images';
import moneyFormat from '../../utils/money-format';
import {gameOverlayOpen} from '../../actions';
import {strings, CURRENCIES} from '../../constants';

const conversions = {
    carrot: {
        coin: 'CARROT',
        label: strings.learnCarrots,
        labelOne: strings.learnCarrotsSingle,
    },
    gold: {
        coin: 'GOLD',
        label: strings.learnGold,
        labelOne: strings.learnGoldSingle,
    },
    dollar: {
        coin: 'USD',
        label: strings.learnDollars,
        labelOne: strings.learnDollarsSingle,
    }
};

export default class Learn extends Component {
    state = {
        conversionKey: 'carrot',
    }

    onOpen = () => this.props.dispatch(gameOverlayOpen(true))

    onClose = () => this.props.dispatch(gameOverlayOpen(false))

    render() {
        const {exchange, wolloCollected, overlayOpen} = this.props;
        const {conversionKey} = this.state;
        const {coin, label, labelOne} = conversions[conversionKey];

        const conversion = exchange && exchange[coin] || 1;
        const dps = (CURRENCIES[coin] && CURRENCIES[coin].dps) || 0;
        const compareValue = moneyFormat(String(wolloCollected * conversion), dps);

        if (overlayOpen) {
            return (
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.close} onPress={this.onClose}>
                            <Image style={styles.closeImg} source={images.close} />
                        </TouchableOpacity>
                        <Image style={styles.rabbit} source={images.rabbit} />
                        <Text style={styles.title}>{strings.learnTitle}</Text>
                        <Text style={styles.text}>{strings.learnHowMuch}</Text>
                        <View style={styles.containerButtons}>
                            {Object.keys(conversions).map(b => (
                                <ButtonIcon
                                    key={b}
                                    onClick={() => this.setState({conversionKey: b})}
                                    icon={images.icon[b]}
                                    selected={conversionKey === b}
                                />
                            ))}
                        </View>
                        <View style={styles.containerText}>
                            <Text style={styles.text}>{strings.learnOneWollo} {conversion} {conversion === 1 ? labelOne : label}</Text>
                        </View>
                        <View style={styles.containerComparison}>
                            <View style={styles.containerBlockCompare}>
                                <Image style={styles.pile} source={images.wollo} />
                                <Text style={styles.textCompare}>
                                    {strings.learnCompareStart} {wolloCollected} {strings.learnCompareEnd}
                                </Text>
                            </View>
                            <Image style={styles.equals} source={images.equals}/>
                            <View style={styles.containerBlockCompare}>
                                <Image style={styles.pile} source={images.pile[conversionKey]} />
                                <Text style={styles.textCompare}>
                                    {`${compareValue} ${wolloCollected === 1 ? labelOne : label}`}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            );

        }
        return (
            <View style={styles.button}>
                <Counter
                    value={wolloCollected}
                    onPress={this.onOpen}
                />
            </View>
        );
    }
}
