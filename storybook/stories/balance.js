import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Balance} from '../../src/app/screens/balance';

const props = {
    dispatch: () => {},
    navigation: {
        navigate: () => {},
        addListener: () => {},
        state: {
            key: 'SCREEN_BALANCE',
            routeName: 'SCREEN_BALANCE'
        },
        actions: {}
    },
    error: null,
    exchange: {
        XLM: 0.3936,
        BTC: 0.0000147,
        ETH: 0.00025584,
        EUR: 0.102828,
        USD: 0.12,
        JPY: 13.8984,
        GBP: 0.091956,
        GOLD: 0.0031452
    },
    balance: '100',
    balanceXLM: '50',
    baseCurrency: 'USD',
    escrow: null,
    firstTime: false,
    kids: [],
};

storiesOf('Balance')
    .add('default view', () => (
        <Balance {...props}/>
    ))
    .add('with kids', () => (
        <Balance {...{
            ...props,
            kids: [{
                name: 'Kid name',
                dob: '01/01/2010',
                photo: null,
                address: 'GD5Q7KRFQC3Q7YQPYAZ4G65B65EBCJOVSHPE65MIYQMCLUQULQDKBLUX',
                balance: '20',
            }, {
                name: 'Kid name 2',
                dob: '01/01/2010',
                photo: null,
                address: 'GAG6MT2Q4II2JHZI67QP2FHBTV7WAQ3NWVKVASDQHR7DPSP7H3HBVEQA',
                balance: '17',
            }]
        }}/>
    ))
    .add('first time', () => (
        <Balance {...{...props, firstTime: true}}/>
    ))
    .add('loading', () => (
        <Balance {...{...props, exchange: null}}/>
    ))
    .add('error', () => (
        <Balance {...{...props, exchange: null, error: new Error('Network error')}}/>
    ));
