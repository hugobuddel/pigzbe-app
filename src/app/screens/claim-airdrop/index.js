import React, {Component} from 'react';
import Button from '../../components/button';
import {SCREEN_CLAIM} from '../../constants';
import StepModule from '../../components/step-module';

export default class ClaimVIP extends Component {
    onBack = () => this.props.navigation.navigate(SCREEN_CLAIM)

    render() {
        return (
            <StepModule
                title={'Claim Your Wollo'}
                content={'To get you validated, we just need a few quick details. This should only take a few minutes.'}
                icon="coins"
                onBack={this.onBack}
                justify="flex-end"
                pad
            >
                <Button
                    label="Back"
                    onPress={this.onBack}
                />
            </StepModule>
        );
    }
}
