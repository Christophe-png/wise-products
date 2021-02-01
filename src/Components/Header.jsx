import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://cdn.shopify.com/s/files/1/0266/5526/0732/files/Logo_pour_Facebook_lien_site_600x600.png?v=1580466220"
        alt="logo Wise Trail running"
      />

      <Link className="nav-homepage" to="/">
        <h1 className="title">Wise</h1>
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
    </div>
  );
}

export default Header;
