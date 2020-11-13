import React from 'react';
import { Card } from 'react-bootstrap';

const GAME_STATUS = Object.freeze(
{
    'NOT_PURCHASED': 1,
    'OWNED': 2,
    'IN_CART': 3
});

class GameCard extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    handleAddToCart = (id) => {
        console.log('add to cart', id);
    }

    renderPriceBadge = ({status, price, id}) => {
        switch(status) {
            case GAME_STATUS.NOT_PURCHASED:
                return <button className="Button--small" onClick={() => this.handleAddToCart(id)}>$ {price}</button>
            case GAME_STATUS.IN_CART:
                return <div className="Badge--dark">IN CART</div>
            case GAME_STATUS.OWNED:
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