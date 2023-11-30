import React, { useContext } from "react";

import classes from "./Product.module.css";
import { ShopContext } from "../../context/shop-context";

function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const addCartHandler = () => {
    addToCart(id);
  };

  const cartItemsAmount = cartItems[id];

  return (
    <div className={classes.product}>
      <img src={productImage} alt="Product Pictures" />
      <div className={classes.description}>
        <p>
          <b>{productName}</b>
        </p>
        <p>{price}</p>
      </div>
      <button onClick={addCartHandler} className={classes.addToCartBttn}>
        Add to Cart {cartItemsAmount > 0 && cartItemsAmount}
      </button>
    </div>
  );
}

export default Product;
