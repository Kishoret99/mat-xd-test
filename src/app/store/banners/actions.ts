import * as BANNERS_ACTIONS from './constants';
import { Action } from '../core/store';

export function getBannersRequestAction() {
    return {
        type: BANNERS_ACTIONS.GET_BANNERS_REQUEST,
        payload: null
    }
}

export function getBannersSuccessAction(banners) {
    return {
        type: BANNERS_ACTIONS.GET_BANNERS_SUCCESS,
        payload: banners
    }
}

export function getBannerFailureAction(error) {
    return {
        type: BANNERS_ACTIONS.GET_BANNERS_FAILURE,
        payload: error
    }
}
