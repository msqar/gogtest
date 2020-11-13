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
                <div className="CartItem-thumbnailContainer">
                    <Image className="CartItem-thumbnail" src={item.thumbnail} />
                </div>
                <div className="CartItem-bodyWrap">
                    <div className="CartItem-body">
                        <span className="CartItem-title">{item.title}</span>
                        <button onClick={this.handleProductRemoval} className="CartItem-removeButton Button--textOnly">Remove</button>
                    </div>
                    <div className="CartItem-priceContainer">
                        <span className="CartItem-priceTag">$ {item.price}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem;