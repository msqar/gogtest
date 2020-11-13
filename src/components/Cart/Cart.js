import React from 'react';
import CartIcon from '../../assets/icons/cart_icon.svg';
import './Cart.scss';

class Cart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
            items: []
        }
    }

    toggleCartDropdown = () => {
        const { isVisible } = this.state;
        this.setState({isVisible: !isVisible});
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

        return <div>Some content here...</div>
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