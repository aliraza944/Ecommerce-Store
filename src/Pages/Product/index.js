import React from "react";
import useStyles from "./Styles";
import Section from "../../Components/Section";
import producthero from "../../Images/product-hero.jpg";
import productheromobile from "../../Images/product-hero-mobile.jpg";
import Cart from "../../Components/Cart";
const Product = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Section
        src1={producthero}
        src2={productheromobile}
        title="wireless simplicity with supperior sound"
        des="hash evo wireless headphone"
        price="49.99"
        left
      />
      <Cart />
    </div>
  );
};

export default Product;
