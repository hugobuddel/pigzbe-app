import getAPIURL from '../utils/api-url';
import {
    ERROR,
    CLAIM,
    TRANSFER,
    LOADING,
    LOCAL_STORAGE
} from '../constants/action-types';
import {getBalance} from './eth';
import {trustStellarAsset} from './stellar';
import {strings} from '../constants';

export const validate = () => async (dispatch, getState) => {
    const {stellar} = getState().user;
    const {localStorage} = getState().content;
    const transactionHash = localStorage.transactionHash || getState().events.transactionHash;

    console.log('validate');
    console.log(transactionHash);

    dispatch({type: LOADING, payload: 'Finishing Ethereum validation'});

    try {
        let payload;

        if (!(localStorage.stellarAccount && localStorage.receipt)) {
            payload = await (await fetch(`${getAPIURL()}/claim`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    tx: transactionHash,
                    pk: stellar.pk,
                })
            })).json();

            if (payload.error) {
                console.log(payload);
                dispatch({type: ERROR, payload: strings.errorEthereumTransactionInvalid});
                setTimeout(dispatch, 5000, {type: LOADING, payload: null});
                return;
            }

            console.log(payload);

            dispatch({
                type: LOCAL_STORAGE,
                payload: {
                    stellarAccount: {pk: payload.stellar.pk},
                    receipt: payload.receipt,
                }
            });

        } else {
            payload = {
                stellar: localStorage.stellarAccount,
                receipt: localStorage.receipt,
            };
        }

        dispatch({type: CLAIM, payload});
        dispatch(trustStellarAsset());
    } catch (e) {
        console.log(e);
        dispatch({type: ERROR, payload: e});
    }
};

export const claim = () => async (dispatch, getState) => {
    const {stellar} = getState().user;
    const {localStorage} = getState().content;
    const transactionHash = localStorage.transactionHash || getState().events.transactionHash;

    dispatch({type: LOADING, payload: strings.statusValidatingEthereumTransaction});

    try {
        let payload;

        if (!localStorage.complete) {
            payload = await (await fetch(`${getAPIURL()}/transfer`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    tx: transactionHash,
                    pk: stellar.pk,
                })
            })).json();

            if (payload.error) {
                if (payload.error === 1) {
                    dispatch({type: ERROR, payload: strings.errorPaymentAlreadyProcessed});
                } else {
                    dispatch({type: ERROR, payload: payload.message});
                }
                // setTimeout(dispatch, 2000, {
                //     type: LOADING,
                //     payload: null
                // });

                return;
            }

            dispatch({
                type: LOCAL_STORAGE,
                payload: {
                    transfer: payload,
                }
            });

        } else {
            payload = localStorage.transfer;
        }

        dispatch({type: TRANSFER, payload});
        dispatch(getBalance());
        // dispatch(getActivity());
        dispatch({type: LOADING, payload: strings.statusTransferWolloComplete});
        setTimeout(dispatch, 2000, {
            type: LOADING,
            payload: null,
        });

        dispatch({
            type: LOCAL_STORAGE,
            payload: {
                complete: true,
            }
        });
    } catch (e) {
        console.log(e);
        dispatch({type: ERROR, payload: e});
    }
};
