import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../redux/actions/cartActions';
import ProductListComponent from '../components/product/ProductListComponent';

const getTotalItems = (cartItems) => {
    return Object.keys(cartItems).reduce((total, item) => {
        return cartItems[item].quantity + total;
    }, 0)
    ;
}


class ProductListContainer extends Component {
    render() {
        return (
            <ProductListComponent 
                listOfProducts = {this.props.listOfProducts}
                totalItems={this.props.totalItems}
                addToCart={this.addToCart}
                navigateToCart={this.navigateToCart}>
            </ProductListComponent>
        );
    }
    addToCart = (product) => {
        this.props.addToCart(product);
    }
    navigateToCart =() => {
        this.props.history.push('/cart');
    }
}

const mapStateToProps = (state) => {
    return {
        listOfProducts : state.products,
        totalItems : getTotalItems(state.cart)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart : data => dispatch(addToCart(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
