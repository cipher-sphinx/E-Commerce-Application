import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import CartItem from "./CartItem";
import { ShopContext } from "../../context/shop-context";
import classes from "../cart/Cart.module.css";

function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div>
      <div className={classes.cart}>
        <h1>Your cart items</h1>
      </div>
      <div className={classes.cart}>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          } else {
            return null; // or undefined
          }
        })}
      </div>
      <div>
        <h1 className={classes.total}>Total Amount : ${totalAmount}</h1>
      </div>
    </div>
  );
}

export default Cart;
