import {StyleSheet} from 'react-native';

import {
    color,
    fontFamily,
    paddingH
} from '../../styles';

export default StyleSheet.create({
    containerHeader: {
        backgroundColor: color.blue,
        height: '50%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerHeaderKids: {
        height: 204,
        flex: 0,
    },
    containerBody: {
        backgroundColor: color.mediumBlue,
        paddingBottom: 20,
        paddingLeft: paddingH,
        paddingRight: paddingH,
    },
    containerText: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        flexGrow: 1,
        paddingTop: 20
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
    titleLarge: {
        fontSize: 25,
    },
    tagline: {
        fontFamily,
        color: color.white,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 30,
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
        fontSize: 16,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    error: {
        color: color.red,
        fontSize: 18
    },
    profileWrapper: {
        backgroundColor: 'red',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile: {
        width: 90,
        marginLeft: 20,
        marginRight: 20,
    },
    name: {
        fontFamily,
        color: color.white,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
