import React from 'react';
import CartIcon from '../../assets/icons/cart_icon.svg';
import { EventEmitter } from '../../services/event-emitter';
import { GameService } from '../../services/game-service';
import { Events } from '../../services/index';
import CartItem from '../CartItem/CartItem';
import BubbleEffect from '../BubbleEffect/BubbleEffect';
import { cloneDeep } from 'lodash';

/**
 * Cart Component:
 * Ideally, this Cart implementation would be based on a server-side solution.
 * But due to the lack of an API, the implementation below is pretty different than in a
 * real case scenario.
*/
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
        EventEmitter.subscribe(Events.OVERLAY_CLICKED_EVENT, this.closeCartDropdown);
    }

    toggleCartDropdown = () => {
        const { isVisible } = this.state;
        this.setState({isVisible: !isVisible}, () => {
            EventEmitter.dispatch(Events.DROPDOWN_TOGGLE_EVENT, {isVisible: !isVisible});
        });
    }

    closeCartDropdown = () => {
        this.setState({isVisible: false});
    }

    calculateCartTotal() {
        const { items } = this.state;
        return items.reduce((acum, item) => {
            return acum + item.price;
        }, 0).toFixed(2);
    }

    onClearCart = () => {
        const { items } = this.state;
        const removedIds = items.map((prod) => prod.id);
        this.setState({items: []}, () => {
            EventEmitter.dispatch(Events.REMOVED_FROM_CART_EVENT, [...removedIds]);
        });
    }

    /**
     * This callback is called when product add event is dispatched.
     * Gets game by ID using the mocked service and pushes it to the cart.
     * @param {number} id
     */
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

    /**
     * This callback is called when product remove event is dispatched within the Cart.
     * Iterates through the current games' list and removes it by its id.
     * @param {number} id
     */
    onProductRemoved = (id) => {
        const { items } = this.state;

        let productList = cloneDeep(items);
        productList = productList.filter((prod) => prod.id !== id);

        this.setState({items: productList}, () => {
            EventEmitter.dispatch(Events.REMOVED_FROM_CART_EVENT, [id]);
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
        return items.map((product, idx) => {
            return <CartItem key={idx} item={product} onRemove={this.onProductRemoved}/>
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
                    <span className="Text--12 Text--bold Text--uppercase">
                        {items.length} {items.length === 1 ? 'item' : 'items '} in cart
                    </span>
                    <div>
                        <span className="Text--12 Text--bold u-marginRm">$ { this.calculateCartTotal() }</span>
                        <button className="Button u-paddingHl" onClick={this.onClearCart}>CLEAR CART</button>
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