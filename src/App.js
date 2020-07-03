import React from "react";
import data from "./data";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  const openMenu = () => {
    var element = document.querySelector(".sidebar");
    element.classList.add("open");
  };

  const closeMenu = () => {
    var element = document.querySelector(".sidebar");
    element.classList.remove("open");
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <a href="index.html">Ecommerce</a>
          </div>
          <div className="header-links">
            <a href="cart.html" className="cart">
              Cart
            </a>
            <a href="signin.html">Signin</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>
            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/products/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <ul className="products">
              {data.products.map((product) => (
                <li>
                  <div className="product">
                    <img
                      className="product-img"
                      src={product.image}
                      alt="product"
                    />
                    <div className="product-name">
                      <a href="product.html">{product.name}</a>
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">{product.price}$</div>
                    <div className="product-rating">
                      {product.rating} Stars({product.numReviews})
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <footer className="footer">all rights reseverd.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
