import React, {Component} from 'react';
import {connect} from 'react-redux';
import Transaction from './transaction';
import {strings, SCREEN_DASHBOARD} from '../../constants';
import {loadEscrowAccount, validateTx} from '../../actions';
import ScrollList from '../../components/scroll-list';
import StepModule from '../../components/step-module';

export class Escrow extends Component {
    async componentDidMount() {
        const {dispatch, transactions} = this.props;

        await dispatch(loadEscrowAccount());

        for (const transaction of transactions) {
            await dispatch(validateTx(transaction.xdr));
        }
    }

    onBack = () => this.props.navigation.navigate(SCREEN_DASHBOARD)

    render() {
        const {
            dispatch,
            transactions,
            submitting,
            loading
        } = this.props;

        // console.log(JSON.stringify(this.props, null, 2));

        return (
            <StepModule
                title={'Distribution lock-up'}
                content={transactions.length ? 'Your Wollo release schedule:' : null}
                icon="coins"
                scroll={false}
                loading={loading || submitting}
                loaderMessage={submitting ? strings.escrowSubmitting : null}
            >
                <ScrollList
                    items={transactions.map(t => ({...t, dispatch}))}
                    ItemComponent={Transaction}
                />
            </StepModule>
        );
    }
}

export default connect(state => ({
    // balance: state.escrow.balance,
    transactions: state.escrow.transactions,
    loading: state.escrow.loading,
    error: state.escrow.error,
    submitting: state.escrow.submitting
}))(Escrow);
