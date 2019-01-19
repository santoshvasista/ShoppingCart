import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText} from 'mdbreact';
import Axe from "../../assets/Axe.jpg";
import Bandsaw from '../../assets/Bandsaw.jpg';
import Chisel from '../../assets/Chisel.jpg';
import Hacksaw from '../../assets/Hacksaw.jpg';
import Sledgehammer from '../../assets/Sledgehammer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const images = {
    Axe, Bandsaw, Chisel, Hacksaw, Sledgehammer
}

const ProductItemComponent  = props => {
    return (
        <Card wide style={{maxHeight: "19rem"}}>
            <CardImage cascade
                className="img-fluid"
                src={images[props.product.name]}
                waves
                // style={{maxWidth: "8rem", maxHeight: "5rem", paddingLeft: '25%', height: '5rem'}}
            />
            <CardBody cascade>
                <CardTitle>{props.product.name}</CardTitle>
                <CardText>
                    Price : {props.product.price}
                </CardText>
                <Button rounded size="md" onClick={(event) => props.addToCart(props.product)}> 
                    <FontAwesomeIcon size="lg" icon="cart-plus" /> 
                    <span style={{margin : '5px'}}>Add To Cart </span> 
                </Button>
            </CardBody>
            </Card>
    )
}

export default ProductItemComponent;