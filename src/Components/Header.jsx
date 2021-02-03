import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <Link className="" to="/">
        <img
          className="navbar-logo"
          src="https://cdn.shopify.com/s/files/1/0266/5526/0732/files/Logo_horizontale_400x250_rogne_3_410x.jpg?v=1585217297"
          alt="logo Wise Trail running"
        />
      </Link>

      <ul>
        <li>
          <Link className="nav-wise-products" to="/product">
            Boutique
          </Link>
        </li>
        <li>
          <Link className="nav-a-propos" to="/a-propos">
            A propos
          </Link>
        </li>
        <li>
          <Link className="nav-contact-form" to="/contact-form">
            Nous contacter
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
