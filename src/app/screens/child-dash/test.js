import React from 'react';
import renderer from 'react-test-renderer';
import {ChildDash} from './';

const props = {
    dispatch: () => {},
    navigation: {
        navigate: () => {},
        addListener: () => {},
        state: {
            key: 'SCREEN_CHILD_DASH',
            routeName: 'SCREEN_CHILD_DASH'
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
    balance: '0',
    balanceXLM: '0',
    baseCurrency: 'USD',
    escrow: null,
    firstTime: true,
    kid: {
        name: 'Ella',
        dob: '01/01/2010',
        photo: '',
        address: 'GD5Q7KRFQC3Q7YQPYAZ4G65B65EBCJOVSHPE65MIYQMCLUQULQDKBLUX',
        balance: '20',
        tasks: [],
        allowances: [],
    }
};

describe('Child dash', () => {
    test('renders correctly', () => {
        renderer.create(<ChildDash {...props}/>);
    });
});
