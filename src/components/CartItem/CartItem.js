import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';

class CartItem extends React.PureComponent {
    render() {
        const { item } = this.props;
        return (
            <div className="CartItem">
                <Row>
                    <Col lg={4}>
                        <Image className="CartItem-thumbnail" src={item.thumbnail} />
                    </Col>
                    <Col lg={6}>
                        <div className="CartItem-body">
                            <span className="CartItem-title">{item.title}</span>
                            <button className="Button--textOnly">Remove</button>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <span className="CartItem-priceTag">$ {item.price}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CartItem;