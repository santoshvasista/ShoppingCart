import initialState from './initialState';
import * as actionTypes from '../actiontypes/actionTypes';

const CartReducer = (state = initialState.cart, action) => {
    switch(action.type) {
        //Action for Add To Cart
        case actionTypes.ADD_TO_CART : {
            let temp_state = {...state};
            if(temp_state[action.payload.name]) {
                temp_state[action.payload.name].quantity++;
            } else {
                temp_state[action.payload.name] = {
                    ...action.payload, quantity : 1
                }
            }
            window.localStorage.setItem('>>-ahadf_ffhnh', JSON.stringify(temp_state));
            return temp_state;   
        }
        //Action for Delete To Cart
        case actionTypes.DELETE_IN_CART : {
            let temp_state = {...state};
            if(temp_state[action.payload.name]) {
                if(temp_state[action.payload.name].quantity === 1)
                    delete temp_state[action.payload.name];
                else
                    temp_state[action.payload.name].quantity--;
            }
            window.localStorage.setItem('>>-ahadf_ffhnh', JSON.stringify(temp_state));
            return temp_state;
        }
        default :
            return state;
    }
}

export default CartReducer;