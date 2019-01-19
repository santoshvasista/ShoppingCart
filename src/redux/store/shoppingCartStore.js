import {createStore} from 'redux';
import combineReducer from '../reducers/combineReducer';

const store = createStore(combineReducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);

export default store;
