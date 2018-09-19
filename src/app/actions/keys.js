import {Keypair, getServer} from '@pigzbe/stellar-utils';
import {KEYCHAIN_ID_MNEMONIC, KEYCHAIN_ID_STELLAR_KEY} from '../constants';
import Keychain from '../utils/keychain';
import {generateMnemonic, getSeedHex, getKeypair, isValidMnemonic} from '../utils/hd-wallet';
import {appError, loadWallet} from './';

export const KEYS_IMPORT_ERROR = 'KEYS_IMPORT_ERROR';
export const KEYS_TEST_USER = 'KEYS_TEST_USER';
export const KEYS_KEYPAIR = 'KEYS_KEYPAIR';
export const KEYS_KEYPAIR_SAVED = 'KEYS_KEYPAIR_SAVED';
export const KEYS_RESTORE_LOADING = 'KEYS_RESTORE_LOADING';
export const KEYS_RESTORE_ERROR = 'KEYS_RESTORE_ERROR';

export const createMnemonic = () => async () => {
    const mnemonic = await generateMnemonic();
    const seedHex = getSeedHex(mnemonic);
    return {mnemonic, seedHex};
};

export const createKeysFromSeed = (seedHex, index = 0) => () => getKeypair(seedHex, index);

export const createKeypair = index => async (dispatch, getState) => {
    const {mnemonic} = getState().keys;

    if (mnemonic) {
        return getKeypair(getSeedHex(mnemonic), index);
    }

    if (typeof Keypair.randomAsync === 'function') {
        return await Keypair.randomAsync();
    }
    return Keypair.random();
};

export const setKeys = (keypair, mnemonic, keysSaved) => ({type: KEYS_KEYPAIR, keypair, mnemonic, keysSaved});

export const saveKeys = () => async (dispatch, getState) => {
    const {publicKey, secretKey, mnemonic} = getState().keys;
    if (mnemonic) {
        await Keychain.save(KEYCHAIN_ID_MNEMONIC, mnemonic);
    }
    await Keychain.save(KEYCHAIN_ID_STELLAR_KEY, secretKey);
    dispatch({type: KEYS_KEYPAIR_SAVED});
    await dispatch(loadWallet(publicKey));
};

// export const createKeys = () => async dispatch => {
//     try {
//         const keypair = await createKeypair();
//         return dispatch(setKeys(keypair, null, false));
//     } catch (e) {
//         console.log(e);
//     }
//     return null;
// };

export const restoreKeysError = error => ({type: KEYS_RESTORE_ERROR, error});
export const restoreKeysLoading = value => ({type: KEYS_RESTORE_LOADING, value});

const getAllPayments = async (publicKey, payments, records) => {
    if (!payments) {
        payments = await getServer().payments()
            .forAccount(publicKey)
            .order('asc')
            .limit(10)
            .call();

        records = payments.records;
    }

    const next = await payments.next();

    if (next.records.length) {
        records = records.concat(next.records);
        return await getAllPayments(publicKey, next, records);
    }

    return records;
};

export const restoreKeys = mnemonic => async dispatch => {
    dispatch(restoreKeysError(null));
    dispatch(appError(null));
    dispatch(restoreKeysLoading(true));

    try {
        if (!isValidMnemonic(mnemonic)) {
            throw new Error('Invalid mnemonic');
        }
        const seedHex = getSeedHex(mnemonic);
        const keypair = getKeypair(seedHex, 0);
        const publicKey = keypair.publicKey();

        const payments = await getAllPayments(publicKey);

        console.log('publicKey', publicKey);
        console.log('payments', payments);
        // console.log('next', await payments.next());
        const accountsCreated = payments.filter(p => p.type === 'create_account' && p.funder === publicKey);
        console.log('records', accountsCreated);

        for (const payment of accountsCreated) {
            const key = payment.account;
            const funder = payment.funder;
            const transaction = await payment.transaction();
            const memo = transaction.memo_type === 'text' ? transaction.memo : '';
            console.log('account', key, memo, funder);
        }

        // kids to add from address and memo -- search mnemonic indices and get name
        // also get tasks, goals etc accounts

        dispatch(setKeys(keypair, mnemonic, true));
        await dispatch(saveKeys());
    } catch (error) {
        console.log(error);
        const err = new Error('Incorrect. Please try again.');
        dispatch(restoreKeysError(err));
        dispatch(appError(err));
    }
    dispatch(restoreKeysLoading(false));
};

export const importKeyError = error => ({type: KEYS_IMPORT_ERROR, error});

export const importKey = secretKey => async dispatch => {
    dispatch(importKeyError(null));
    dispatch(appError(null));

    try {
        const keypair = Keypair.fromSecret(secretKey);
        dispatch(setKeys(keypair, null, true));
        await dispatch(saveKeys());
    } catch (error) {
        console.log(error);
        const err = new Error('Invalid key');
        dispatch(importKeyError(err));
        dispatch(appError(err));
    }
};

export const getKeys = () => async (dispatch, getState) => {
    const mnemonic = await Keychain.load(KEYCHAIN_ID_MNEMONIC);
    const secretKey = await Keychain.load(KEYCHAIN_ID_STELLAR_KEY);
    const {testUserKey} = getState().keys;

    console.log('mnemonic', mnemonic);

    if (testUserKey) {
        return Keypair.fromSecret(secretKey);
    }

    if (mnemonic) {
        return getKeypair(getSeedHex(mnemonic), 0);
    }

    if (secretKey) {
        return Keypair.fromSecret(secretKey);
    }

    return null;
};

export const loadKeys = () => async dispatch => {
    try {
        const keypair = await dispatch(getKeys());
        dispatch(setKeys(keypair, null, true));
    } catch (error) {
        console.log(error);
    }
};

export const clearKeys = () => async dispatch => {
    await Keychain.clear(KEYCHAIN_ID_MNEMONIC);
    await Keychain.clear(KEYCHAIN_ID_STELLAR_KEY);
    dispatch(setKeys(null));
};

export const keysTestUser = testUserKey => ({type: KEYS_TEST_USER, testUserKey});
