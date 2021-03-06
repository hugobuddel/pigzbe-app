import {apiURL} from '../selectors';
import {appError, appAddSuccessAlert, loadWallet} from './';

export const VIP_SET_STEP = 'VIP_SET_STEP';
export const VIP_EMAIL_VERIFIED = 'VIP_EMAIL_VERIFIED';
export const VIP_CONFIRMED = 'VIP_CONFIRMED';
export const VIP_ERROR = 'VIP_ERROR';
export const VIP_LOADING = 'VIP_LOADING';

export const vipSetStep = step => ({type: VIP_SET_STEP, step});

export const vipLoading = loading => ({type: VIP_LOADING, loading});

export const vipError = error => ({type: VIP_ERROR, error});

export const vipRequestEmail = () => async (dispatch, getState) => {
    dispatch(vipLoading(true));
    dispatch(vipError(null));
    try {
        console.log('deviceAuth');
        console.log(JSON.stringify(getState().deviceAuth, null, 2));
        console.log('settings');
        console.log(JSON.stringify(getState().settings, null, 2));
        const api = apiURL(getState());
        const email = getState().deviceAuth.email || getState().settings.email;
        const phone = getState().deviceAuth.phone || getState().settings.phone;
        const country = getState().deviceAuth.country || getState().settings.country;
        console.log('vipRequestEmail', email, phone, country);
        const result = await (await fetch(`${api}/vip/send-email?email=${email}&phone=${phone}&country=${country}`)).json();
        console.log(result);
        if (result.error) {
            dispatch(appError(result.message));
            dispatch(vipError(result.message));
            return false;
        }
    } catch (error) {
        console.log('error', error);
        dispatch(appError('Could not request email'));
        dispatch(vipError('Could not request email'));
        return false;
    }
    dispatch(vipLoading(false));
    return true;
};

export const vipVerifyEmail = emailCode => async (dispatch, getState) => {
    console.log('vipVerifyEmail');
    dispatch(vipLoading(true));
    dispatch(vipError(null));
    let success = false;
    try {
        const api = apiURL(getState());
        const email = getState().deviceAuth.email || getState().settings.email;
        const result = await (await fetch(`${api}/vip/verify-email?email=${email}&emailCode=${emailCode}`)).json();
        console.log(result);
        if (result.error) {
            dispatch(appError('Could not verify email'));
        } else {
            success = true;
            dispatch({type: VIP_EMAIL_VERIFIED, verified: true});
            dispatch(appAddSuccessAlert('Email verified successfully'));
        }
    } catch (error) {
        console.log('error', error);
        dispatch(vipError(error));
    }
    dispatch(vipLoading(false));
    return success;
};

export const vipRequestCode = () => async (dispatch, getState) => {
    console.log('vipRequestCode');
    dispatch(vipLoading(true));
    dispatch(vipError(null));

    try {
        const api = apiURL(getState());
        const authyId = getState().deviceAuth.id || getState().settings.authyId;
        const result = await (await fetch(`${api}/auth/login?id=${authyId}`)).json();

        if (result.success) {
            dispatch(appAddSuccessAlert('Verification code requested'));
        } else {
            const err = new Error(result.message.message || result.message);
            dispatch(vipError(err));
        }
    } catch (error) {
        console.log('error', error);
        dispatch(vipError(error));
    }
    dispatch(vipLoading(false));
};

export const vipConfirm = code => async (dispatch, getState) => {
    console.log('vipConfirm', code);
    dispatch(vipLoading(true));
    dispatch(vipError(null));
    let success = false;
    try {
        const api = apiURL(getState());
        const {publicKey} = getState().keys;
        const authyId = getState().deviceAuth.id || getState().settings.authyId;
        const email = getState().deviceAuth.email || getState().settings.email;
        console.log('authyId', authyId);
        console.log('email', email);
        console.log('publicKey', publicKey);
        console.log('code', code);
        const result = await (await fetch(`${api}/vip/confirm?id=${authyId}&code=${code}&publicKey=${publicKey}&email=${email}`)).json();
        // id', 'code', 'email', 'publicKey'
        console.log('result', result);
        if (result && result.updated) {
            await dispatch(loadWallet());
            dispatch({type: VIP_CONFIRMED});
            dispatch(appAddSuccessAlert('VIP status confirmed'));
            success = true;
        } else {
            const msg = result.message.message || result.message;
            const err = new Error(msg);
            dispatch(vipError(err));
            dispatch(appError(msg));
        }
    } catch (error) {
        console.log('error', error);
        dispatch(vipError(error));
    }
    dispatch(vipLoading(false));
    return success;
};
