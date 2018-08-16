import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '../../components/button';
import {SCREEN_BALANCE} from '../../constants';
import StepModule from '../../components/step-module';
import {familyAddKid} from '../../actions';

export class FamilyIntro extends Component {
    state = {loading: false}
    // onNext = () => this.props.navigation.navigate(SCREEN_FAMILY_NICKNAME)

    onBack = () => this.props.navigation.navigate(SCREEN_BALANCE)

    onNext = async () => {
        const names = ['Ella', 'Sebastian', 'Billy', 'Bobby'];
        const name = names[Math.floor(Math.random() * names.length)];
        this.setState({loading: true});
        await this.props.dispatch(familyAddKid(name, '01/01/2012', null));
        this.setState({loading: false});
    }

    render() {
        return (
            <StepModule
                title="Your Family"
                icon="family"
                content={'Create secure sub accounts off your own wallet so you can set your children *tasks, goals, rewards* and *recurring allowances*. This all helps to teach them about money in the 21st century.'}
                pad
                loading={this.state.loading}
                onBack={this.onBack}
            >
                <Button
                    label={'Add My Children'}
                    onPress={this.onNext}
                />
            </StepModule>
        );
    }
}

export default connect()(FamilyIntro);