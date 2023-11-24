import { useContext } from "react";
import { ShoppingContext } from "../../ShoppingContext/ShoppingContext";

import "./Product.css";

const Product = (props) => {
  const { id, title, image } = props.data;
  const { cartItems, addToCart, totalAmountEachItem } =
    useContext(ShoppingContext);

  const totalAmount = totalAmountEachItem(id);

  return (
    <div className="product">
      <img src={image} alt={id} />
      <div className="description">
        <h4>{title}</h4>
        <p>R${totalAmount}</p>
        <button onClick={() => addToCart(id)}>
          Adicionar {cartItems[id] > 0 ? `(${cartItems[id]})` : ""}
        </button>
      </div>
    </div>
  );
};

export default Product;
