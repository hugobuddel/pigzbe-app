import {StyleSheet} from 'react-native';
import {
    container,
    input,
    color,
    fontFamily,
    paddingH
} from '../../styles';

export default StyleSheet.create({
    scrollContainer: {
        backgroundColor: color.blue,
        alignSelf: 'stretch',
        flex: 1
    },
    container: {
        ...container,
        paddingLeft: paddingH,
        paddingRight: paddingH,
        justifyContent: 'flex-start'
    },
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    avatarText: {
        fontFamily,
        color: color.white,
        fontSize: 14,
        opacity: 0.6,
        textAlign: 'center',
        marginTop: 20
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    },
    title: {
        fontFamily,
        color: color.white,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 10
    },
    subscribe: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 25,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        width: '100%',
        flexGrow: 1
    },
    subscribeText: {
        fontFamily,
        color: color.white,
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10
    },
    buttonContainer: {
        alignSelf: 'stretch',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexGrow: 2
    },
    error: {
        fontFamily,
        color: color.red,
        fontSize: 18
    },
    input,
    inputError: {
        ...input,
        borderColor: '#ff0000'
    }
});
