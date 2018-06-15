import React from 'react';
import {View, Text} from 'react-native';
import TextInput from '../../text-input';
import styles from '../styles';
import StepWrapper from './stepWrapper';

export default ({
    onNext,
    onBack,
    error,
    pk,
    mnemonic,
    onChangeMnemonic,
    onChangePk
}) => (
    <StepWrapper onNext={onNext} onBack={onBack}>
        <Text style={styles.title}>Import your Eidoo wallet</Text>
        <Text style={styles.subtitle}>We're almost there! Enter your Eidoo wallet address and the 12 word seed below and lets claim.</Text>
        <View style={styles.containerFields}>
            <TextInput
                error={!!error}
                value={pk}
                numberOfLines={2}
                placeholder="Your Eidoo wallet address"
                onChangeText={onChangePk}
                returnKeyType="done"
            />
            <TextInput
                error={!!error}
                value={mnemonic}
                numberOfLines={3}
                placeholder="Your 12 word seed, you must include spaces"
                onChangeText={onChangeMnemonic}
                returnKeyType="done"
            />
        </View>
    </StepWrapper>
);
