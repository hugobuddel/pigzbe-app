import {StyleSheet} from 'react-native';

import {
    color,
    fontFamily
} from '../../styles';

export default StyleSheet.create({
    buttonHit: {
        alignSelf: 'stretch',
        backgroundColor: color.white,
        borderColor: color.white,
        borderRadius: 22.5,
        borderWidth: 1,
        marginBottom: 10
    },
    buttonHitSecondary: {
        backgroundColor: color.mediumBlue,
        borderColor: color.white
    },
    buttonHitSecondaryDisabled: {
        backgroundColor: color.mediumBlueOpacity50,
        borderColor: color.white
    },
    buttonHitOutline: {
        backgroundColor: color.transparent,
        borderColor: color.blue
    },
    buttonHitOutlineDisabled: {
        borderColor: color.blueOpacity40
    },
    buttonTextSecondary: {
        color: color.white
    },
    button: {
        fontFamily,
        fontWeight: 'bold',
        alignSelf: 'stretch',
        color: color.blue,
        fontSize: 14,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        height: 45,
        textAlign: 'center'
    },
    buttonDisabled: {
        color: color.blueOpacity40
    },
    buttonPlain: {
        color: color.white,
        fontSize: 14,
        fontWeight: 'normal',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        fontSize: 14,
        textDecorationColor: color.white
    }
});
