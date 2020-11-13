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

    onProductRemoved = (ids) => {
        const { games } = this.state;
        const products = cloneDeep(games);

        products.forEach((prod) => {
            if (ids.includes(prod.id)) {
                prod.status = PROD_STATUS.NOT_PURCHASED
            }
        });

        this.setState({games: products});
    }

    renderGameCards() {
        const { games } = this.state;
        return games.map((game, idx) => {
            return (
                <Col xl={{cols: '5'}} lg={{cols: '5'}} md="6" sm="6" xs="6" key={idx} className="u-flex">
                    <GameCard onAddToCart={this.handleAddToCart} info={game} />
                </Col>
            )
        });
    }

    handleAddToCart = (id) => {
        const { games } = this.state;
        const gamesCopy = cloneDeep(games);
        const game = gamesCopy.find((game) => game.id === id);
        game.status = PROD_STATUS.IN_CART;
        this.setState({games: gamesCopy}, () => {
            EventEmitter.dispatch(Events.ADD_TO_CART_EVENT, {id});
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
                                <Row>
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