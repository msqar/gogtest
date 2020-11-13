import React from 'react';
import CartIcon from '../../assets/icons/cart_icon.svg';
import './Cart.scss';

class Cart extends React.Component {
    render() {
        return (
            <div className="Cart">
                <button className="Cart-button">
                    <img className="Cart-icon" alt="Cart_Icon" src={CartIcon}/>
                    <span className="Cart-counter">0</span>
                </button>
            </div>
        );
    }
}

export default Cart;