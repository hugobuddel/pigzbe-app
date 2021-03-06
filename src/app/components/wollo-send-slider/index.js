import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import Slider from '../slider';
import Button from '../button';
import AmountExchange from '../amount-exchange';
import ConfirmSend from 'app/components/confirm-send';
import Progress from 'app/components/progress';
import {sendWolloToKid} from 'app/actions';
import {KID_SEND_MAX_AMOUNT} from 'app/constants';
import moneyFormat from 'app/utils/money-format';

const getAmount = (value, balance) => {
    if (value === 0) {
        return 0;
    }
    const max = Math.min(balance, KID_SEND_MAX_AMOUNT);

    // const minp = 0;
    // const maxp = 1;
    // const minv = Math.log(0.001);
    // const maxv = Math.log(1);
    // const scale = (maxv - minv) / (maxp - minp);
    // const amt = Math.exp(minv + scale * (value - minp));
    // const val = Math.round(amt * max * 10) / 10;
    // return val;

    // const unit = 0.5;
    // return Math.round((value * max) / unit) * unit;
    if (max <= 2) {
        return Math.round(max * value * 10) / 10;
    }
    return Math.round(value * Math.floor(max));
};

export class WolloSendSlider extends Component {
    state = {
        value: 0,
        amount: 0,
        displayAmount: 0,
        sendModalClosed: true,
        confirmSend: false,
    }

    onSliderChange = value => this.setState({
        value,
        amount: getAmount(value, this.props.balances.WLO)
    })

    onSend = () => this.setState({
        confirmSend: true,
    })

    onConfirmSend = () => {
        this.setState({confirmSend: false, sendModalClosed: false});
        this.props.sendWolloToKid(this.state.amount);
    }

    onCancelSend = () => this.setState({
        confirmSend: false,
    })

    onCloseSendModal = () => this.setState({
        sendModalClosed: true,
        confirmSend: false,
        value: 0,
        amount: 0
    })

    render() {
        const {
            exchange,
            baseCurrency,
            sendError,
            sending,
            sendComplete,
            balances,
            hasGas,
        } = this.props;

        return (
            <View>
                <View style={styles.valueWrapper}>
                    <View style={[styles.value, {
                        left: `${this.state.value * 100}%`,
                        opacity: this.state.amount ? 1 : 0,
                    }]}>
                        <Text style={styles.valueText}>{moneyFormat(this.state.amount, 2, 0)}</Text>
                        <View style={styles.valuePoint}/>
                    </View>
                </View>

                <Slider
                    value={this.state.value}
                    onValueChange={this.onSliderChange}
                    disabled={Number(balances.WLO) === 0 || !hasGas}
                />
                {this.state.value === 0 ? (
                    <Text style={styles.exchange}>Send Wollo</Text>
                ) : (
                    <AmountExchange
                        style={styles.exchange}
                        amount={this.state.amount}
                        exchange={exchange}
                        baseCurrency={baseCurrency}
                    />
                )}
                {this.state.amount !== 0 &&
                    <Button
                        label="Send Wollo"
                        onPress={this.onSend}
                    />
                }

                {this.state.confirmSend && (
                    <ConfirmSend
                        name={this.props.name}
                        amount={this.state.amount}
                        onYes={this.onConfirmSend}
                        onNo={this.onCancelSend}
                    />
                )}
                {!this.state.sendModalClosed && (
                    <Progress
                        open={sendError || sendComplete || sending === this.props.address}
                        complete={sendComplete}
                        title={sendComplete === this.props.address ? 'Success!' : 'In progress'}
                        error={sendError}
                        text={sendComplete === this.props.address ?
                            `${this.state.amount} Wollo has successfully been sent to ${this.props.name}`
                            :
                            `Sending ${this.state.amount} Wollo to ${this.props.name}`
                        }
                        buttonLabel="Close"
                        onPress={this.onCloseSendModal}
                    />
                )}
            </View>
        );
    }
}

export default connect(
    (state) => ({
        balances: state.wallet.balances,
        hasGas: state.wallet.hasGas,
        baseCurrency: state.settings.baseCurrency,
        exchange: state.exchange.exchange,
        sendError: state.kids.sendError,
        sending: state.kids.sendingWollo,
        sendComplete: state.kids.sendComplete,
    }),
    (dispatch, ownProps) => ({
        sendWolloToKid: amount => dispatch(sendWolloToKid(ownProps.address, amount)),
    }),
)(WolloSendSlider);
