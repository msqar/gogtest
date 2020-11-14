import { cloneDeep } from 'lodash';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import GameCard from '../../components/GameCard/GameCard';
import OverlayBackground from '../../components/OverlayBackground/OverlayBackground';
import { EventEmitter } from '../../services/event-emitter';
import { GameService } from '../../services/game-service';
import { Events } from '../../services/index';
import PROD_STATUS from '../../utils/prod_status';
import './HomeView.scss';

class HomeView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            games: []
        }
    }

    componentDidMount() {
        EventEmitter.subscribe(Events.REMOVED_FROM_CART_EVENT, this.onProductRemoved);

        GameService.getGames()
        .then((games) => {
            this.setState({games});
        })
    }

    /**
     * This function callback is called whenever a product is removed from the Cart.
     * Receives an array of IDs of 1-N size.
     * Stores the result to the current game state.
     * @param {Array} productIds
     */
    onProductRemoved = (productIds) => {
        const { games } = this.state;
        const products = cloneDeep(games);

        products.forEach((prod) => {
            if (productIds.includes(prod.id)) {
                prod.status = PROD_STATUS.NOT_PURCHASED
            }
        });

        this.setState({games: products});
    }

    renderGameCards() {
        const { games } = this.state;
        return games.map((game, idx) => {
            return (
                <Col className="HomeView-col" xl={{cols: '5'}} lg={{cols: '5'}} md="6" sm="6" xs="6" key={idx}>
                    <GameCard onAddToCart={this.handleAddToCart} info={game} />
                </Col>
            )
        });
    }

    /**
     * This function would call backend to add a product to cart, as instead it's being mocked again.
     * @param {number} productId
     */
    handleAddToCart = (productId) => {
        const { games } = this.state;
        const gamesCopy = cloneDeep(games);

        const game = gamesCopy.find((game) => game.id === productId);
        game.status = PROD_STATUS.IN_CART;

        this.setState({games: gamesCopy}, () => {
            EventEmitter.dispatch(Events.ADD_TO_CART_EVENT, { productId });
        });
    }

    render() {
        return (
            <Container fluid="md">
                <OverlayBackground />
                <div className="HomeView">
                    <section className="Section">
                        <span className="Section-title text-uppercase">GAME OF THE WEEK</span>
                        <div className="Banner">
                            <div className="Banner-imageContainer">
                                <Image className="Banner-image" src="images/game_bg_xl.png" alt="highlight_game"/>
                            </div>
                            <div className="Section-gameResults">
                                <Row className="HomeView-row">
                                    { this.renderGameCards() }
                                </Row>
                            </div>
                        </div>
                    </section>
                </div>
            </Container>
        );
    }
}

export default HomeView;