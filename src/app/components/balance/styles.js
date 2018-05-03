import {StyleSheet} from 'react-native';
import {
    container,
    color,
    fontFamily,
    paddingH
} from '../../styles';

export default StyleSheet.create({
    container: Object.assign({}, container, {flex: 0}),
    welcome: {
        fontFamily,
        color: color.white,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10
    },
    balanceContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        marginTop: 10
    },
    logo: {
        width: 65,
        height: 25,
        marginBottom: 10,
        marginTop: 10
    },
    currencyLogo: {
        width: 23,
        height: 19,
        marginRight: 10
    },
    pig: {
        marginTop: 20,
    },
    balance: {
        fontFamily,
        color: color.white,
        fontSize: 40
    },
    label: {
        fontFamily,
        color: color.whiteOpacity60,
        fontSize: 14,
    },
    escrow: {
        paddingLeft: paddingH,
        paddingRight: paddingH,
        marginBottom: 10,
        marginTop: 20
    },
});
