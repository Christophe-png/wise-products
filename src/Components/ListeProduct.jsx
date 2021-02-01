import Product from "./Product";
import "./ListeProduct.css";

const ListeProduct = (props) => (
  <section className="ListeProduct">
    {props.products.map((singleProduct) => (
      <Product
        key={singleProduct.id}
        name={singleProduct.name}
        image={singleProduct.image}
        collection={singleProduct.collection}
        price={singleProduct.price}
      />
    ))}
  </section>
);

export default ListeProduct;
