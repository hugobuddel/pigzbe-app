import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {
    TRANSFER_TYPE_TASK,
    // TRANSFER_TYPE_GIFT,
    NOTIFICATION_STAGE_TASK_QUESTION,
    NOTIFICATION_STAGE_ALLOWANCE_CLOUD
} from 'app/constants/game';

import Storage from 'app/utils/storage';
import moment from 'moment';
import styles from './styles';
import Learn from '../learn';
// import GameTasks from '../game-tasks';
import GameBg from '../../components/game-bg';
import Button from '../../components/button';
import GameCounter from '../../components/game-counter';
import Tree from '../../components/game-tree';
import Pigzbe from '../../components/game-pigzbe';
import GameNotification from 'app/components/game-notification';
import GameCarousel from 'app/components/game-carousel';
import GameCloudFlow from 'app/components/game-cloud-flow';
import GoalOverlay from 'app/components/game-goal-overlay';
import GameMessageBubble from 'app/components/game-message-bubble';
import {gameOverlayOpen} from '../../actions';
import {claimWollo} from '../../actions';

const TREE_WIDTH = 200;

export class Game extends Component {
    state = {
        targetX: 0,
        cloudStatus: null,
        isGoalOverlayOpen: false,
        goalOverlayAddress: null,

        // Tour state
        tourType: null,
        tourStep: 0,
        lastStepTime: null,
        showTapFirstCloud: false,
        showAskParent: false,
        showTapCloudOrTree: false,
    }

    async componentDidMount() {
        // Open the tour if needed
        const key = `${this.props.kid.address}_numVisits`;
        const {numVisits = 0} = await Storage.load(key);

        if (numVisits === 0) {
            this.setState({
                tourType: 'firstTime',
            });
        } else if (numVisits === 1) {
            this.setState({
                tourType: 'secondTime',
            });
            setTimeout(this.closeSecondTimeTour, 4000);
        }
        await Storage.save(key, {numVisits: numVisits + 1});
    }

    closeSecondTimeTour = () => {
        if (this.state.tourType === 'secondTime' && this.state.tourStep === 0) {
            this.setState({
                tourType: null,
                showTapCloudOrTree: true
            });
        }
    }

    onClickCounter = () => this.props.dispatch(gameOverlayOpen(true))

    onMove = dx => {
        const numGoals = this.props.kid.goals && this.props.kid.goals.length || 0;
        const minX = 0;
        const maxX = (1 + numGoals) * TREE_WIDTH;
        const newX = Math.max(minX, Math.min(maxX, this.state.targetX + dx * TREE_WIDTH));
        const targetX = Math.floor(newX / TREE_WIDTH) * TREE_WIDTH;
        this.setState({targetX});
    }

    onClaim = (hash, amount) => {
        // Close any message bubbles asking the user to click a cloud
        this.setState({
            showTapFirstCloud: false,
            showAskParent: false,
            showTapCloudOrTree: false,
        });

        console.log('this.props.kid', this.props.kid);

        this.props.dispatch(claimWollo(
            this.props.kid.address, this.props.kid.home, hash, amount
        ));
    }

    onTreeClicked = (goal) => {
        // untested:
        console.log('TODO: add this cash:', this.state.currentCloud);
        console.log('to this goal:', goal);
    }

    onActivateCloud = (currentCloud) => {
        console.log('onActivateCloud', currentCloud);

        this.setState({
            showCloud: true,
            currentCloud,
            cloudStatus: currentCloud.type === TRANSFER_TYPE_TASK ? NOTIFICATION_STAGE_TASK_QUESTION : NOTIFICATION_STAGE_ALLOWANCE_CLOUD
        });
    }

    onCloudStatusChange = (status) => {
        console.log('onCloudStatusChange', status);

        this.setState({
            cloudStatus: status
        });
    }

    openGoalOverlay = (address = null) => {
        this.setState({
            isGoalOverlayOpen: true,
            goalOverlayAddress: address,

            // Close any message bubbles asking the user to click a tree
            showTapFirstCloud: false,
            showAskParent: false,
            showTapCloudOrTree: false,
        });
    }

    closeGoalOverlay = () => {
        this.setState({
            isGoalOverlayOpen: false,
            goalOverlayAddress: null,
        });
    }

    nextTree = () => this.setState({targetX: this.state.targetX + TREE_WIDTH})
    prevTree = () => this.setState({targetX: this.state.targetX - TREE_WIDTH})

    render() {
        // console.log(JSON.stringify(this.props, null, 2));
        const {
            dispatch,
            exchange,
            wolloCollected,
            overlayOpen,
            kid,
            parentNickname,
            balances,
        } = this.props;

        const {
            showTapFirstCloud,
            showAskParent,
            showTapCloudOrTree
        } = this.state;

        const totalWollo = (parseFloat(balances[kid.home]) || 0) + kid.goals.reduce((total, goal) => {
            return total + (parseFloat(balances[goal.address]) || 0);
        }, 0);

        const {showCloud, currentCloud} = this.state;
        const pigzbe = (
            <Pigzbe
                style={{
                    position: 'absolute',
                    bottom: 148,
                    left: 36
                }}
            />
        );
        const wolloCounter = (
            <View style={styles.counter}>
                <GameCounter
                    value={totalWollo}
                    onPress={this.onClickCounter}
                />
            </View>
        );
        const clouds = (!kid.actions || kid.actions.length === 0) ? null : (
            <View style={styles.clouds}>
                {showCloud ? (
                    <GameCloudFlow
                        changeStatus={this.onCloudStatusChange}
                        status={this.state.cloudStatus}
                        cloudData={currentCloud}
                    />
                ) : (
                    <GameCarousel
                        {...{
                            Item: GameNotification,
                            width: Dimensions.get('window').width,
                            itemWidth: 200,
                            data: kid.actions.map(a => ({
                                ...a,
                                key: a.hash,
                                onActivateCloud: this.onActivateCloud
                            }))
                        }}
                    />
                )}
            </View>
        );

        return (
            <View style={styles.full}>
                <GameBg
                    targetX={this.state.targetX}
                    onMove={this.onMove}>
                    <View style={styles.trees}>
                        <TouchableOpacity onPress={() => this.openGoalOverlay(kid.home)}>
                            <Tree
                                name="HOMETREE"
                                value={(balances && balances[kid.home] !== undefined) ? parseFloat(balances[kid.home]) : 0}
                            />
                        </TouchableOpacity>
                        {kid.goals && kid.goals.map((goal, i) => (
                            <TouchableOpacity key={i} onPress={() => this.openGoalOverlay(goal.address)}>
                                <Tree
                                    name={goal.name}
                                    value={(balances && balances[goal.address] !== undefined) ? parseFloat(balances[goal.address]) : 0}
                                />
                            </TouchableOpacity>
                        ))}

                        <TouchableOpacity onPress={() => this.openGoalOverlay()}>
                            <Tree
                                name="NEW GOAL?"
                                newValue={true}
                                value={'0'}
                            />
                        </TouchableOpacity>
                    </View>
                </GameBg>
                {pigzbe}
                {clouds}
                {wolloCounter}
                <Learn
                    dispatch={dispatch}
                    exchange={exchange}
                    wolloCollected={wolloCollected}
                    overlayOpen={overlayOpen}
                />
                {/* <View style={{position: 'absolute', top: 30, right: 0, padding: 5, backgroundColor: 'white'}}>
                    <Text>{kid.name}</Text>
                    <Text>Address: {kid.address ? `${kid.address.slice(0, 6)}...` : ''}</Text>
                    <Text>Balance: {kid.balance}</Text>
                    <Text>Tasks: {kid.tasks && kid.tasks.length || 0}</Text>
                    <Text>Allowances: {kid.allowances && kid.allowances.length || 0}</Text>
                    <Text>Goals: {kid.goals && kid.goals.length || 0}</Text>
                    <Text>Actions: {kid.actions && kid.actions.length || 0}</Text>
                </View> */}

                <GoalOverlay
                    kid={kid}
                    isOpen={this.state.isGoalOverlayOpen}
                    onClose={this.closeGoalOverlay}
                    goalAddress={this.state.goalOverlayAddress}
                    parentName={parentNickname}
                />

                {showTapFirstCloud &&
                    <View style={styles.bubble}>
                        <GameMessageBubble
                            content="Tap your first cloud to begin!"
                        />
                    </View>
                }
                {showAskParent &&
                    <TouchableOpacity style={styles.bubble} onPress={() => {
                        this.setState({showAskParent: false});
                    }}>
                        <GameMessageBubble
                            content={`Why not ask ${parentNickname} to set you some tasks?`}
                        />
                    </TouchableOpacity>
                }
                {showTapCloudOrTree &&
                    <View style={styles.bubble}>
                        <GameMessageBubble
                            content="Select a cloud or tap your tree to manage your Wollo"
                        />
                    </View>
                }
                {this.renderTour(pigzbe, clouds, wolloCounter)}
            </View>
        );
    }

    renderTour(pigzbe, clouds, wolloCounter) {
        const {
            tourType,
            tourStep,
            lastStepTime,
        } = this.state;

        if (tourType === 'secondTime') {
            return (
                <TouchableOpacity style={styles.tourContainer} onPress={this.closeSecondTimeTour}>
                    {tourStep === 0 &&
                        <View style={styles.bubble}>
                            <GameMessageBubble
                                content="Yay, you're back!"
                            />
                        </View>
                    }
                </TouchableOpacity>
            );
        }
        if (tourType === 'firstTime') {
            return (
                <TouchableOpacity style={[
                    styles.tourContainer,
                    tourStep >= 3 ? styles.tourContainerFaded : null,
                ]} onPress={() => {
                    const timeNow = moment().valueOf();
                    if (lastStepTime && (lastStepTime + 500 > timeNow)) {
                        return;
                    }
                    const nextTourStep = tourStep + 1;
                    if (nextTourStep <= 4) {
                        this.setState({
                            tourStep: nextTourStep,
                            lastStepTime: timeNow,
                        });
                    } else {
                        // Tour is done...
                        this.setState({
                            tourType: null,
                            showTapFirstCloud: clouds !== null,
                            showAskParent: clouds === null,
                        });
                    }
                }}>
                    {tourStep === 0 &&
                        <View style={styles.bubble}>
                            <GameMessageBubble
                                content={`Welcome ${this.props.kid.name}. I'm Pigzbe, your piggy companion...`}
                            />
                        </View>
                    }
                    {tourStep === 1 &&
                        <View style={styles.bubble}>
                            <GameMessageBubble
                                content="I think we are going to be great friends."
                            />
                        </View>
                    }
                    {tourStep === 2 &&
                        <View style={styles.bubble}>
                            <GameMessageBubble
                                content="Before we begin, I thought I should show you around."
                            />
                        </View>
                    }
                    {tourStep === 3 &&
                        <Fragment>
                            {wolloCounter}
                            <View style={styles.bubble}>
                                <GameMessageBubble
                                    content="This shows you the total of how much Wollo you have saved in the app."
                                />
                            </View>
                        </Fragment>
                    }
                    {tourStep === 4 &&
                        <Fragment>
                            {clouds === null ? (
                                <View style={styles.clouds}>
                                    <View style={{alignSelf: 'center'}}>
                                        <GameNotification
                                            amount={10}
                                            memo="Description"
                                            onActivateCloud={() => {}}
                                        />
                                    </View>
                                </View>
                            ) : clouds}
                            <View style={styles.bubble}>
                                <GameMessageBubble
                                    content="Pocket money, tasks or gifts will be shown as clouds."
                                />
                            </View>
                        </Fragment>
                    }
                    {tourStep === 5 &&
                        <View style={styles.bubble}>
                            <GameMessageBubble
                                content="Tap your first cloud to begin!"
                            />
                        </View>
                    }
                    {pigzbe}
                </TouchableOpacity>
            );
        }
    }
}

export default connect(state => ({
    kid: state.kids.kids.find(k => k.address === state.auth.kid),
    parentNickname: state.kids.parentNickname,
    exchange: state.coins.exchange,
    wolloCollected: state.game.wolloCollected,
    overlayOpen: state.game.overlayOpen,
    balances: state.kids.balances,
}))(Game);
