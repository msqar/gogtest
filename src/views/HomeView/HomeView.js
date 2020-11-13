import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import GameCard from '../../components/GameCard/GameCard';
import { EventEmitter } from '../../services/event-emitter';
import { GameService } from '../../services/game-service';
import { Events } from '../../services/index';
import './HomeView.scss';
import PROD_STATUS from '../../utils/prod_status';
import { cloneDeep } from 'lodash';

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

    onProductRemoved = ({id}) => {
        console.log(`product with id ${id} was removed from cart`);
    }

    renderGameCards() {
        const { games } = this.state;
        return games.map((game, idx) => {
            return (
                <Col key={idx} className="u-flex">
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
            <Container>
                <div className="HomeView">
                    <div className="Section">
                        <span className="Section-title text-uppercase">GAME OF THE WEEK</span>
                        <div className="GameHighlight">
                            <Image className="GameHighlight-item" fluid src="images/game_bg_xl.png" alt="highlight_game" />
                        </div>
                        <div className="Section-gameResults">
                            <Row>
                                { this.renderGameCards() }
                            </Row>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default HomeView;