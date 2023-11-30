import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.nav}>
      <h1>Cartify.</h1>
      <div className={classes.links}>
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
