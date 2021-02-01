import React from "react";
import Product from "./Product";
import "./ListeProduct.css";

const ListeProduct = (props) => (
  <div className="ListeProduct">
    {props.products.map((singleProduct) => {
      return (
        <Product
          key={singleProduct.id}
          name={singleProduct.name}
          image={singleProduct.image}
          collection={singleProduct.collection}
          price={singleProduct.price}
        />
      );
    })}
  </div>
);

export default ListeProduct;
