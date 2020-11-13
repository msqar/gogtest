import React from 'react';
import CartIcon from '../../assets/icons/cart_icon.svg';

class Cart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
            items: [{price: 9.99}, {price: 4.99}]
        }
    }

    toggleCartDropdown = () => {
        const { isVisible } = this.state;
        this.setState({isVisible: !isVisible});
    }

    calculateCartTotal() {
        const { items } = this.state;
        return items.reduce((acum, item) => {
            return acum + item.price;
        }, 0);
    }

    renderCartProducts() {
        return (
            <div>PRODUCT</div>
        )
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
                <div className="Cart-dropdownRow">
                    { this.renderCartProducts() }
                </div>
            </div>
        );
    }

    render() {
        const { isVisible } = this.state;
        return (
            <div className={'Cart ' + (isVisible ? 'is--opened' : '')}>
                <button className="Cart-button" onClick={this.toggleCartDropdown}>
                    <img className="Cart-icon" alt="Cart_Icon" src={CartIcon}/>
                    <span className="Cart-counter">0</span>
                </button>
                <div className={'Cart-dropdown ' + (isVisible ? 'is--visible' : '')}>
                    { this.renderCartContent() }
                </div>
            </div>
        );
    }
}

export default Cart;