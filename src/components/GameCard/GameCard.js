import React from 'react';
import { Card } from 'react-bootstrap';
import PROD_STATUS from '../../utils/prod_status';

class GameCard extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    handleAddToCart = (id) => {
        const { onAddToCart } = this.props;
        if (onAddToCart) onAddToCart(id);
    }

    renderPriceBadge = ({status, price, id}) => {
        switch(status) {
            case PROD_STATUS.NOT_PURCHASED:
                return <button className="Button--small" onClick={() => this.handleAddToCart(id)}>$ {price}</button>
            case PROD_STATUS.IN_CART:
                return <div className="Badge--dark">IN CART</div>
            case PROD_STATUS.OWNED:
                return <div className="Badge--disabled">OWNED</div>
        }
    }

    render() {
        const { info } = this.props;
        return (
            <Card className="GameCard">
                <Card.Img className="GameCard-thumbnail" variant="top" src={info.thumbnail} />
                <Card.Body className="GameCard-body">
                    <Card.Title className="GameCard-title">{info.title}</Card.Title>
                </Card.Body>
                <Card.Footer className="GameCard-footer">
                    {
                        info.discount &&
                        <div className="Badge">-{info.discount}</div>
                    }
                    { this.renderPriceBadge(info) }
                </Card.Footer>
            </Card>
        );
    }
}

export default GameCard;