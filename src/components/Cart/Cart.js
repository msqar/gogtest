import React from 'react';
import CartIcon from '../../assets/icons/cart_icon.svg';
import { EventEmitter } from '../../services/event-emitter';
import { GameService } from '../../services/game-service';
import { Events } from '../../services/index';
import CartItem from '../CartItem/CartItem';
import BubbleEffect from '../BubbleEffect/BubbleEffect';

const BUBBLE_ANIMATION_TIMEOUT = 500;

class Cart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
            runAnimation: false,
            items: []
        }
    }

    componentDidMount() {
        EventEmitter.subscribe(Events.ADD_TO_CART_EVENT, this.onProductAdded);
    }

    toggleCartDropdown = () => {
        const { isVisible } = this.state;
        this.setState({isVisible: !isVisible});
    }

    calculateCartTotal() {
        const { items } = this.state;
        return items.reduce((acum, item) => {
            return acum + item.price;
        }, 0).toFixed(2);
    }

    onProductAdded = ({id}) => {
        GameService.getGameById(id)
        .then((response) => {
            if (response.length) {
                const items = [...this.state.items];
                items.push(response[0]);
                this.setState({items}, () => {
                    this.runBubbleAnimation();
                });
            }
        });
    }

    runBubbleAnimation() {
        this.setState({runAnimation: true});

        setTimeout(() => {
            this.setState({runAnimation: false});
        }, BUBBLE_ANIMATION_TIMEOUT)
    }

    renderCartProducts() {
        const { items } = this.state;
        return items.map((product) => {
            return <CartItem item={product} />
        });
    }

    renderCartContent() {
        const { items } = this.state;
        if (items.length === 0) {
            return (
                <div className="Cart-dropdownBody is--empty">
                    <img className="Cart-dropdown-cartIcon" src={CartIcon} alt="Cart_Icon" />
                    <span className="Cart-dropdown-emptyTitle">Your Cart is Empty</span>
                    <div className="Divider"/>
                    <span className="Text--secondary Text--14">Explore great games and offers</span>
                    <button className="Button--secondary u-marginTl">BROWSE BESTSELLERS</button>
                </div>
            )
        }

        return (
            <div className="Cart-dropdownBody">
                <div className="Cart-dropdownRow">
                    <span className="Text--14 Text--bold Text--uppercase">
                        {items.length} {items.length === 1 ? 'item' : 'items '} in cart
                    </span>
                    <div>
                        <span className="Text--14 Text--bold u-marginRm">$ { this.calculateCartTotal() }</span>
                        <button className="Button u-paddingHl">CLEAR CART</button>
                    </div>
                </div>
                <div className="Divider--fullWidth u-marginAn" />
                <div className="Cart-products">
                    { this.renderCartProducts() }
                </div>
            </div>
        );
    }

    render() {
        const { isVisible, items, runAnimation } = this.state;
        return (
            <div className={'Cart ' + (isVisible ? 'is--opened' : '')}>
                <button className="Cart-button" onClick={this.toggleCartDropdown}>
                    <img className="Cart-icon" alt="Cart_Icon" src={CartIcon}/>
                    <span className="Cart-counter">{items.length}</span>
                    {
                        runAnimation &&
                        <BubbleEffect />
                    }
                </button>
                <div className={'Cart-dropdown ' + (isVisible ? 'is--visible' : '')}>
                    { this.renderCartContent() }
                </div>
            </div>
        );
    }
}

export default Cart;