import {StyleSheet} from 'react-native';

import {
    container,
    color,
    fontFamily,
    paddingH
} from '../../styles';

export default StyleSheet.create({
    container,
    containerHeader: {
        height: '50%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerBody: {
        height: '50%',
        width: '100%',
        paddingLeft: paddingH,
        paddingRight: paddingH,
        flex: 1,
        justifyContent: 'center'
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 0
    },
    image: {
        width: 162,
        height: 63
    },
    title: {
        fontFamily,
        color: color.white,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        textAlign: 'center'
    },
    tagline: {
        fontFamily,
        color: color.white,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        textAlign: 'center',
        zIndex: 1,
        position: 'relative'
    },
    subtitle: {
        fontFamily,
        color: color.white,
        fontSize: 14,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        opacity: 0.6,
        textAlign: 'center'
    },
    error: {
        color: color.red,
        fontSize: 18
    }
});