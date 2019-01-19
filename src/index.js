import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/store/shoppingCartStore';
import Routing from './routes';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import {Provider} from 'react-redux';

library.add(faCartPlus);
library.add(faShoppingCart);

ReactDOM.render(
    <Provider store = {store}>
        <Routing />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
