import React from "react";
import "./Product.css";

function Product(props) {
  const { image, name, collection, price } = props;
  return (
    <div className="Product">
      <h2>{name}</h2>
      <div
        className="TheProduct"
        style={{ backgroundImage: "url(" + image + ")" }}
      ></div>
      <p>{collection}</p>
      <p>{price}</p>
    </div>
  );
}

export default Product;
