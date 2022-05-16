import React from "react";

import './header.css';

import LogoImage from '../../assets/logo.png';
import CartIcon from '../../assets/shopping-bag.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          <img src={ LogoImage } alt="Logo-icon" className="image-logo"/>
          
          <div className="actions-header">
            <div className="quantity-cart">
              <strong>Meu carrinho</strong>
              <p>3 items</p>
            </div>
            <img src={ CartIcon } alt="Cart-icon" className="cart-icon"/>
          </div>

        </div>
      </div>
    )
  }
}

export default Header;