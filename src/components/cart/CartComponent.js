import React from 'react';
import { Row, Col, Button} from 'mdbreact';

const CartComponent  = props => {
    return (
        <div>
            {Object.keys(props.cartItems).map(item => {
                return (
                    <div>
                        {props.cartItems[item].name} - {props.cartItems[item].price} - {props.cartItems[item].quantity}
                        <Button style={{padding: '10px'}} onClick={(event) => props.addToCart(props.cartItems[item])}> +1 </Button>
                        <Button style={{padding: '10px'}} onClick={(event) => props.deleteInCart(props.cartItems[item])}> -1 </Button>
                     </div>   
                )
            })}
            Total : {props.total}
            <Row>
                <Button onClick={props.navigateToProducts}> Go to Products </Button>    
            </Row>>
        </div>
    )
}

export default CartComponent;