import React, { useContext } from "react";
import classes from "../cart/CartItem.module.css";
import { ShopContext } from "../../context/shop-context";

function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className={classes.cartItem}>
      <img src={productImage} alt="Orederd Items" />
      <div>
        <p className={classes.description}>{productName}</p>
        <p>{price}</p>
        <div className={classes.countHandler}>
          <button
            onClick={() => {
              addToCart(id);
            }}
          >
            +
          </button>
          <input value={cartItems[id]} />
          <button
            onClick={() => {
              removeFromCart(id);
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
