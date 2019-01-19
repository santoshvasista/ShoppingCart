import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import ProductListContainer from "./containers/ProductListContainer";
import CartContainer from './containers/CartContainer';


const Routing = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" render={()=> (<Route to="/products"/>)}  component={ProductListContainer}/>
                <Route exact path="/products" component = {ProductListContainer} />
                <Route exact path="/cart" component = {CartContainer} />
                {/* <Route exact path="*" component = {ProductListContainer} /> */}
                <Redirect to="/products" />

            </Switch>
        </div>
    </Router>
)

export default Routing;