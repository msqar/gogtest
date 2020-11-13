import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import GameCard from '../../components/GameCard/GameCard';
import { GameService } from '../../services/game-service';
import './HomeView.scss';

class HomeView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            games: []
        }
    }

    componentDidMount() {
        GameService.getGames()
        .then((games) => {
            this.setState({games});
        })
    }

    renderGameCards() {
        const { games } = this.state;
        return games.map((game, idx) => {
            return (
                <Col key={idx} className="u-flex">
                    <GameCard info={game} />
                </Col>
            )
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