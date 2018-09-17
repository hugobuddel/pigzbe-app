import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {color} from '../../styles';
import {SCREEN_BALANCE, SCREEN_TASKS_LIST, SCREEN_ALLOWANCE_AMOUNT} from '../../constants';
import BalanceGraph from '../../components/balance-graph';
import Wollo from '../../components/wollo';
import StepModule from '../../components/step-module';
import KidAvatar from '../../components/kid-avatar';
import ActionPanel from '../../components/action-panel';
import ActionSheet from '../../components/action-sheet';
import styles from './styles';
import {familyDeleteAllowance, familyDeleteTask} from '../../actions';

const Item = ({first, title, subtitle, amount, onPress}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={[styles.item, first ? null : styles.itemBorder]}>
            <Text style={styles.itemTitle}>{title}
                {
                    subtitle && <Text style={styles.itemSubTitle}> ({subtitle})</Text>
                }
            </Text>
            <View style={styles.itemAmount}>
                <Wollo dark balance={amount} />
            </View>
            <Image source={require('./images/iconOverflow.png')} />
        </View>
    </TouchableOpacity>
);

export class ChildDash extends Component {
    state = {
        tasksPanelOpen: false,
        allowancePanelOpen: false,
        taskToEdit: null,
        allowanceToEdit: null,
    }

    onBack = () => this.props.navigation.navigate(SCREEN_BALANCE)

    onAddTask = () => this.props.navigation.navigate(SCREEN_TASKS_LIST, {kid: this.props.kid})

    onAddAllowance = () => this.props.navigation.navigate(SCREEN_ALLOWANCE_AMOUNT, {kid: this.props.kid})

    onTaskAlertOptionSelected = async (option) => {
        console.log('++ onTaskAlertOptionSelected option', option);
        switch (option.selectedOption) {
            case 0:
                // todo navigate to task screen with active tasks
                this.props.navigation.navigate(SCREEN_TASKS_LIST, {kid: this.props.kid, taskToEdit: this.state.taskToEdit});
                break;
            case 1:
                await this.props.dispatch(familyDeleteTask(this.props.kid, this.state.taskToEdit));
                break;
            default:
                // do nothing
        }

        this.setState({
            tasksPanelOpen: false,
        });
    }

    onAllowanceAlertOptionSelected = async (option) => {
        console.log('+++ onAllowanceAlertOptionSelected option', option, this.props.kid, this.state.allowanceToEdit);
        switch (option.selectedOption) {
            case 0:
                // todo navigate to task screen with active tasks
                this.props.navigation.navigate(SCREEN_ALLOWANCE_AMOUNT, {kid: this.props.kid, allowanceToEdit: this.state.allowanceToEdit});
                break;
            case 1:
                await this.props.dispatch(familyDeleteAllowance(this.props.kid, this.state.allowanceToEdit));
                break;
            default:
                // do nothing
        }

        this.setState({
            allowancePanelOpen: false,
        });
    }

    onDisplayAllowanceModal = allowance => this.setState({
        allowancePanelOpen: true,
        allowanceToEdit: allowance,
    })

    onDisplayTasksModal = task => this.setState({
        tasksPanelOpen: true,
        taskToEdit: task,
    })

    render () {
        const {
            kid,
            exchange,
            error,
            baseCurrency,
        } = this.props;

        const loading = !exchange && !error;

        return (
            <Fragment>
                <StepModule
                    scroll
                    headerChildren={(
                        <View style={styles.header}>
                            <KidAvatar photo={kid.photo} size={54}/>
                            <Text style={styles.name}>{kid.name}</Text>
                            <Wollo
                                balance={kid.balance}
                                exchange={exchange}
                                baseCurrency={baseCurrency}
                            />
                        </View>
                    )}
                    backgroundColor={color.transparent}
                    loading={loading}
                    error={error}
                    onBack={this.onBack}
                    hideLogo
                >
                    {(!loading && !error) && (
                        <View>
                            <BalanceGraph balance={kid.balance} exchange={exchange} baseCurrency={baseCurrency}/>
                            <ActionPanel
                                title="Allowance"
                                label="Add an allowance"
                                onAdd={this.onAddAllowance}
                                style={[styles.panel, styles.panelFirst]}
                                boxButton
                            >
                                {kid.allowances.length && (
                                    <View style={styles.box}>
                                        {kid.allowances.map((allowance, i) => (
                                            <Item
                                                key={i}
                                                first={i === 0}
                                                title={allowance.interval}
                                                subtitle={allowance.day}
                                                amount={allowance.amount}
                                                onPress={() => {
                                                    this.onDisplayAllowanceModal(allowance);
                                                }}
                                            />
                                        ))}
                                    </View>
                                )}
                            </ActionPanel>
                            <ActionPanel
                                title="Tasks"
                                label="Add a new task"
                                onAdd={this.onAddTask}
                                style={styles.panel}
                                boxButton
                            >
                                {kid.tasks.length &&
                                    <View style={styles.box}>
                                        {kid.tasks.map((task, i) => (
                                            <Item
                                                key={i}
                                                first={i === 0}
                                                title={task.task}
                                                amount={task.reward}
                                                onPress={() => {
                                                    this.onDisplayTasksModal(task);
                                                }}
                                            />
                                        ))}
                                    </View>
                                }
                            </ActionPanel>
                            <ActionPanel
                                title="Goals"
                                label="Add a new goal"
                                onAdd={() => {}}
                                style={styles.panel}
                                boxButton
                            >
                                <View style={styles.box} />
                            </ActionPanel>
                        </View>
                    )}
                </StepModule>
                <ActionSheet
                    open={this.state.tasksPanelOpen}
                    options={['Edit', 'Delete']}
                    title="All changes will also update child wallet"
                    onRequestClose={() => this.setState({tasksPanelOpen: false})}
                    onSelect={index => this.onTaskAlertOptionSelected({selectedOption: index})}
                />
                <ActionSheet
                    open={this.state.allowancePanelOpen}
                    options={['Edit', 'Delete']}
                    title="All changes will also update child wallet"
                    onRequestClose={() => this.setState({allowancePanelOpen: false})}
                    onSelect={index => this.onAllowanceAlertOptionSelected({selectedOption: index})}
                />
            </Fragment>
        );
    }
}

export default connect(
    (state, props) => ({
        kid: state.family.kids.find(k => k.address === props.navigation.state.params.kid.address),
        error: state.coins.error,
        exchange: state.coins.exchange,
        balance: state.wollo.balance,
        balanceXLM: state.wollo.balanceXLM,
        baseCurrency: state.wollo.baseCurrency,
        kids: state.family.kids,
        sendError: state.wollo.error,
        sending: state.wollo.sending,
        sendStatus: state.wollo.sendStatus,
        sendComplete: state.wollo.sendComplete,
    })
)(ChildDash);
