import React from "react";
import fethProducts from "../../services/fethProducts";

import CartIcon from '../../assets/shopping-bag.svg';
import './home.css';

class Home extends React.Component {

  constructor() {
    super();

    this.getProducts = this.getProducts.bind(this);

    this.state = {
      products: [],
    };
  }


  async componentDidMount() {
    await this.getProducts();
  }

  async getProducts() {
    const productsList = await fethProducts('computador');

    this.setState({
      products: productsList,
    });
  }
  
  render() {
    const { products } = this.state;
    return (
      <main>
        <div className="main-container">
            
            {products.map((product) => (
              <div className="card-product">
                <img src={ product.thumbnail } alt="Product" className="card-image" />
                <strong>{ product.title.substr(0, 40) }</strong>
                <p>Frete Grátis</p>
                <span className="price">{ product.price }</span>
                <button type="button" className="btn-submit">
                  <div className="quantity">
                    <img src={ CartIcon } alt="Cart-icon" /> 3
                  </div>
                  <span className="btn-text">Adicionar ao carrinho</span>
                </button>
              </div>
            ))}

          </div>
      </main>
    )
  }
}

export default Home;