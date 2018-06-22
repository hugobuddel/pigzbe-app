/* eslint-disable no-console */

import {
    USER_BALANCE,
    USER_LOGIN,
    LOCAL_STORAGE,
    ERROR,
    LOADING,
    PRIVATE_KEY
} from '../constants/action-types';
import {isValidSeed, generateAddressFromSeed} from '../utils/web3';
import {load, save} from '../utils/keychain';
import {KEYCHAIN_ID_ETH_KEY} from '../constants';

export const getBalance = () => async (dispatch, getState) => {
    console.log('getBalance');
    try {
        console.log('getBalance > coinbase', getState().user.get('coinbase'));
        const web3 = getState().web3.instance;
        const contract = getState().contract.instance;
        const balance = await contract.methods.balanceOf(getState().user.get('coinbase')).call();
        console.log('getBalance balance', balance, web3.utils.toDecimal(balance));
        dispatch({type: USER_BALANCE, payload: web3.utils.toDecimal(balance)});

    } catch (e) {
        console.log(e);
        dispatch({type: ERROR, payload: e});
    }

};

export const checkUserCache = () => async (dispatch, getState) => {
    const {localStorage} = getState().content;
    const {coinbase} = localStorage;
    const privateKey = await load(KEYCHAIN_ID_ETH_KEY);

    if (!coinbase || !privateKey.key) {
        return;
    }

    dispatch({
        type: USER_LOGIN,
        payload: {
            coinbase
        },
    });

    dispatch({
        type: PRIVATE_KEY,
        payload: {
            privateKey: privateKey.key
        },
    });

    dispatch(getBalance());
};

export const userLogin = (mnemonic, pk) => async (dispatch, getState) => {
    const web3 = getState().web3.instance;

    dispatch({type: LOADING, payload: null});

    try {
        if (!isValidSeed(mnemonic)) {
            throw new Error('Please check your 12 memorable words');
        }

        if (!web3.utils.isAddress(pk)) {
            throw new Error('Please check your wallet address');
        }

        const address = generateAddressFromSeed(mnemonic, pk);
        const account = web3.eth.accounts.privateKeyToAccount(`0x${address.privateKey}`);
        const coinbase = account.address;

        await save(KEYCHAIN_ID_ETH_KEY, address.privateKey);

        dispatch({
            type: LOCAL_STORAGE,
            payload: {
                coinbase
            }
        });

        dispatch({
            type: PRIVATE_KEY,
            payload: {
                privateKey: address.privateKey
            },
        });

        dispatch({
            type: USER_LOGIN,
            payload: {
                coinbase
            },
        });

        dispatch(getBalance());

        return true;
    } catch (e) {
        console.log(e);
        dispatch({type: ERROR, payload: e});
        return false;
    }
};
