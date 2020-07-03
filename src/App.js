import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
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
            <Link to="/">Ecommerce</Link>
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
          </div>
        </main>
        <footer className="footer">all rights reseverd.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
