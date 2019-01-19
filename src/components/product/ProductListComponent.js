import  React from 'react';
import ProductItemComponent from './ProductItemComponent';
import { Row, Col, Button} from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductListComponent = props => {
    return (
        <div style={{margin: '3% 5% 0% 3%'}}>
            <Row style={{margin: '2%'}}>
                <Button onClick={props.navigateToCart}  style={{marginLeft: 'auto', marginRight: '15px'}}> 
                    <FontAwesomeIcon  size="lg" icon="shopping-cart" />
                    {props.totalItems !== 0 && <span style={{color: 'peachpuff', fontSize: '16px', fontWeight: 900}}> {props.totalItems} </span>}
                    {/* <span style={{margin: '5px'}}>Go to Cart </span> */}
                </Button>
            </Row>
            <Row>
                {props.listOfProducts.map(product => 
                    <Col>
                        <ProductItemComponent product={product} addToCart={props.addToCart}></ProductItemComponent>
                    </Col>
                )}
            </Row>
        </div>
    )
}

export default ProductListComponent;