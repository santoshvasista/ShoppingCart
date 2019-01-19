import * as actionTypes from '../actiontypes/actionTypes';

export const addToCart = data => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload : data
    }
}

export const deleteInCart = data => {
    return {
        type: actionTypes.DELETE_IN_CART,
        payload : data
    }
}
