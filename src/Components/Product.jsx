import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Product(props) {
  const { image, name, collection, price, id } = props;
  return (
    <div className="Product">
      <h2>{name}</h2>
      <div
        className="TheProduct"
        style={{ backgroundImage: "url(" + image + ")" }}
      ></div>
      <p>{collection}</p>
      <p>{price}</p>
      <Link to={`/product/${id}`} className="product-info">
        Pour en savoir plus
      </Link>
      <p>
        Je souhaite passer commande:
        <a href="https://www.wisetrailrunning.com/"> Wise Trail Running</a>
      </p>
    </div>
  );
}

export default Product;
