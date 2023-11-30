import React from "react";
import { PRODUCTS } from "../../Products";
import Product from "./Product";

import classes from "./Shop.module.css";

function Shop() {
  return (
    <div className={classes.products}>
      {PRODUCTS.map((product) => (
        <Product data={product} />
      ))}
    </div>
  );
}

export default Shop;
