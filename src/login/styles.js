import {
    Platform,
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'Poppins Regular',
        color: Platform.OS === 'web' ? 'red' : 'black',
        fontSize: 50,
        marginBottom: 20
    },
    error: {
        color: 'red',
        fontSize: 18
    },
    input: {
        alignSelf: 'stretch',
        borderColor: '#000',
        borderWidth: 1,
        fontFamily: 'Poppins Regular',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10
    },
    buttonHit: {
        alignSelf: 'stretch',
        backgroundColor: '#ccc',
        borderRadius: 20,
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    },
    button: {
        alignSelf: 'stretch',
        color: 'blue',
        fontFamily: 'Poppins Regular',
        fontSize: 18,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        textAlign: 'center'
    }
});
