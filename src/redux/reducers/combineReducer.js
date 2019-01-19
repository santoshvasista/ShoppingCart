import {combineReducers} from 'redux';
import products from './productReducer';
import cart from './cartReducer';

const combineReducer = combineReducers({
    products,
    cart
});

export default combineReducer;