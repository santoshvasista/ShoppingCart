import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addToCart, deleteInCart} from '../redux/actions/cartActions';
import CartComponent from '../components/cart/CartComponent';

const calculateTotal = (cartItems) => {
    return Object.keys(cartItems).reduce((total, item) => {
        return (cartItems[item].price * cartItems[item].quantity) + total;
    }, 0)
    ;
}

class CartContainer extends Component {
    render() {
        return (
            <CartComponent 
                cartItems={this.props.cartItems} 
                total={this.props.total}
                addToCart={this.props.addToCart}
                deleteInCart={this.props.deleteInCart}
                navigateToProducts={this.navigateToProducts}
                >
            </CartComponent>
        );
    }
    addToCart = (product) => {
        this.props.addToCart(product);
    }
    deleteInCart = (product) => {
        this.props.deleteInCart(product);
    }
    navigateToProducts = () => {
        this.props.history.push('/products');
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems : state.cart,
        total : calculateTotal(state.cart).toFixed(2)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart : data => dispatch(addToCart(data)),
        deleteInCart : data => dispatch(deleteInCart(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
