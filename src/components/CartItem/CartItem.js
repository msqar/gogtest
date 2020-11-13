import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

class CartItem extends React.PureComponent {

    handleProductRemoval = () => {
        const { item, onRemove } = this.props;
        if (onRemove) onRemove(item.id);
    }

    render() {
        const { item } = this.props;
        return (
            <div className="CartItem">
                <Row>
                    <Col lg={4}>
                        <Image className="CartItem-thumbnail" src={item.thumbnail} />
                    </Col>
                    <Col lg={6} className="u-paddingAn">
                        <div className="CartItem-body">
                            <span className="CartItem-title">{item.title}</span>
                            <button onClick={this.handleProductRemoval} className="CartItem-removeButton Button--textOnly">Remove</button>
                        </div>
                    </Col>
                    <Col lg={2} className="u-paddingLn">
                        <div className="CartItem-priceContainer">
                            <span className="CartItem-priceTag">$ {item.price}</span>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CartItem;