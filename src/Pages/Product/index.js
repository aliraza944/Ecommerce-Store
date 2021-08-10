import React from "react";
import useStyles from "./Styles";
import Section from "../../Components/Section";
import producthero from "../../Images/product-hero.jpg";
import productheromobile from "../../Images/product-hero-mobile.jpg";
import Cart from "../../Components/Cart";
import product1 from "../../Images/Product/product1.jpg";
import productmobile1 from "../../Images/Product/productmobile1.jpg";
import { Typography } from "@material-ui/core";
import product2 from "../../Images/Product/product2.jpg";
import productmobile2 from "../../Images/Product/productmobile2.jpg";
import ProductFeatures from "./ProductFeatures";
import product3 from "../../Images/Product/product3.jpg";
import productmobile3 from "../../Images/Product/productmobile3.jpg";
const Product = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.herocontainer}>
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
      <div className={classes.productcontainer}>
        <Section src1={product1} src2={productmobile1} />
        <ProductFeatures />
      </div>
      <Section
        src1={product2}
        src2={productmobile2}
        title="Sound (and a price) that will blow you away."
        des="With powerful 40mm drivers and exceptional acoustics, Hesh Evo features audio quality that has been refined over four generations of constant improvement. The clear, rich sound rivals the most expensive headphones out there — at a price that’s surprisingly affordable."
        left
      />
      <div className={classes.productcontainer}>
        <Section
          src1={product3}
          src2={productmobile3}
          title="Simplicity Perfected"
          des="Hesh Evo is the unrivaled everyday headphone for people who want to keep it simple. Along with outstanding sound, they’re engineered with just the right amount of added features to make your life a little easier."
          black
          top
        />
      </div>
    </div>
  );
};

export default Product;
