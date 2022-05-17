import React from "react";

import './header.css';

import LogoImage from '../../assets/logo.png';
import CartIcon from '../../assets/shopping-bag.svg';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          <Link to="/" className="link">
            <img src={ LogoImage } alt="Logo-icon" className="image-logo"/>
          </Link>
          <Link to="/cart" className="link">
            <div className="actions-header">
              <div className="quantity-cart">
                <strong>Meu carrinho</strong>
                <p>3 items</p>
              </div>
              <img src={ CartIcon } alt="Cart-icon" className="cart-icon"/>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header;