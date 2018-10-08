import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import GameCloud from '../game-cloud';
import GameMessageBubble from '../game-message-bubble';
import styles from './styles';
import {
    // TRANSFER_TYPE_ALLOWANCE,
    // TRANSFER_TYPE_TASK,
    // TRANSFER_TYPE_GIFT,
    NOTIFICATION_STAGE_TASK_QUESTION,
    NOTIFICATION_STAGE_TASK_GREAT,
    NOTIFICATION_STAGE_TASK_FINISH,
    NOTIFICATION_STAGE_ALLOWANCE_CLOUD
} from 'app/constants/game';

export class CloudFlow extends Component {

    getBubbleContent() {
        switch (this.props.status) {
            case NOTIFICATION_STAGE_TASK_QUESTION:
                return (
                    <View>
                        <Text style={styles.text}>Have you completed your task?</Text>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.button} onPress={() =>
                                this.props.changeStatus(NOTIFICATION_STAGE_TASK_GREAT)}>
                                <Text style={styles.buttonText}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() =>
                                this.props.changeStatus(NOTIFICATION_STAGE_TASK_FINISH)}>
                                <Text style={styles.buttonText}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            case NOTIFICATION_STAGE_TASK_GREAT:
                return `Great, place your finger onto tree to save your ${this.props.cloudData.amount} Wollo there`;
            case NOTIFICATION_STAGE_TASK_FINISH:
                return (
                    <View>
                        <Text style={styles.text}>Please complete your task before collecting your Wollo</Text>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.button} onPress={() =>
                                this.props.changeStatus(null)}>
                                <Text style={styles.buttonText}>Okay</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            case NOTIFICATION_STAGE_ALLOWANCE_CLOUD:
                return `Great, place your finger onto tree to save your ${this.props.cloudData.amount} Wollo there`;
            default:
                return '';
        }
    }

    render() {
        const {callback, status, cloudData, raining} = this.props;
        const {amount, type, memo} = cloudData;
        const showBubble = (status === NOTIFICATION_STAGE_ALLOWANCE_CLOUD || status === NOTIFICATION_STAGE_TASK_QUESTION ||
            status === NOTIFICATION_STAGE_TASK_GREAT || status === NOTIFICATION_STAGE_TASK_FINISH) && !raining;

        return (
            <View style={styles.outer} onPress={callback}>
                <View style={styles.cloud}>
                    <GameCloud
                        type={type}
                        value={amount}
                        name={memo}
                        callback={() => {}}
                        happy={showBubble}
                        raining={raining}
                    />
                </View>
                {
                    showBubble && (
                        <View style={styles.bubbleWrap}>
                            <GameMessageBubble
                                style={{maxWidth: 260, width: 260}}
                                textStyle={{textAlign: 'center'}}
                                content={this.getBubbleContent()}
                                top
                            />
                        </View>
                    )
                }
            </View>
        );
    }
}

export default CloudFlow;