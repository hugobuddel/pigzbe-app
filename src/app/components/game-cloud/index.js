import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import GameWollo from '../game-wollo';
import styles from './styles';

export class Cloud extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
    }

    render() {
        const {value, type, callback, name} = this.props;
        const text = type === 'ALLOWANCE' ? type : name;

        return (
            <TouchableOpacity style={styles.outer} onPress={callback}>
                <Image style={styles.cloud} source={require('./images/cloud.png')} />
                <View style={styles.content}>
                    <View style={styles.value}>
                        <GameWollo value={value} small />
                    </View>
                    <Text style={styles.type}>{text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Cloud;
