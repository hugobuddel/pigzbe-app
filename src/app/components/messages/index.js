import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Text,
    View,
    FlatList,
    ScrollView
} from 'react-native';
import styles from './styles';
import {messagesLoad, messagesMarkRead} from '../../actions';
import Loader from '../loader';
import Logo from '../logo';
import Pig from '../pig';
import Alert from '../alert';
import Message from './message';
import isDesktop from '../../utils/is-desktop';
import {
    strings
} from '../../constants';

class Messages extends Component {
    componentDidMount() {
        this.props.dispatch(messagesMarkRead());
    }

    updateMessages() {
        this.props.dispatch(messagesLoad());
    }

    render() {
        const {
            messages,
            loading,
            error
        } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <Logo/>
                    <Text style={styles.title}>
                        {strings.messagesTitle}
                    </Text>
                    <Pig/>
                </View>
                <View style={styles.containerBody}>
                    {isDesktop ? (
                        <ScrollView>
                            {messages.map((item, i) => (
                                <Message key={i} {...item}/>
                            ))}
                        </ScrollView>
                    ) : (
                        <FlatList
                            data={messages}
                            renderItem={({item}) => <Message {...item}/>}
                        />
                    )}
                </View>
                <Loader
                    isLoading={loading}
                    message={strings.messagesLoading}
                />
                <Alert
                    error={error}
                />
            </View>
        );
    }
}

// export for test
export const MessagesComponent = Messages;

export default connect(state => ({
    messages: state.messages.messages,
    loading: state.messages.messagesLoading,
    error: state.messages.error
}))(Messages);