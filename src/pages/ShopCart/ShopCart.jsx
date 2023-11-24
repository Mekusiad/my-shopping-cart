import { useContext } from "react";
import { PRODUCTS } from "../../products";

import CartItem from "./CartItem";

import "./ShopCart.css";
import { ShoppingContext } from "../../ShoppingContext/ShoppingContext";
import { useNavigate } from "react-router-dom";

const ShopCart = () => {
  const { cartItems, totalAmountItems } = useContext(ShoppingContext);

  const total = totalAmountItems();

  const navigate = useNavigate();

  return (
    <div className="shop-cart">
      <h1>Shopping Cart</h1>
      <div className="buttons">
        <button onClick={() => navigate("/")}>Continuar</button>
        <button onClick={() => navigate("/")}>Checkout</button>
      </div>
      <p className="total">
        <b>Total: R${total}</b>
      </p>
      <div className="cart-product">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ShopCart;
