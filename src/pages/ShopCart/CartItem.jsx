import { useContext } from "react";
import { ShoppingContext } from "../../ShoppingContext/ShoppingContext";
import "./CartItem.css";

const CartItem = (props) => {
  const { id, title, image } = props.data;
  const {
    cartItems,
    addToCart,
    removeToCart,
    updateInputShop,
    totalAmountEachItem,
  } = useContext(ShoppingContext);

  const totalAmount = totalAmountEachItem(id);

  return (
    <div className="cart-item">
      <img src={image} alt="-" />
      <div className="description-item">
        <h4>{title}</h4>
        <p>Price: R${totalAmount}</p>
        <div>
          <button onClick={() => removeToCart(id)}>-</button>
          <input
            type="text"
            value={cartItems[id]}
            onChange={(e) => updateInputShop(id, e.target.value)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
