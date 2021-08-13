import React from "react";
import useStyles from "./Styles";
import Section from "../../Components/Section";
import ScrollAddToCart from "../../Components/ScrollAddToCart";
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
import ProductDescription from "./ProductDescription";
import tile from "../../Images/Product/tile.jpg";
import tilemobile from "../../Images/Product/tilemobile.jpg";
import battery from "../../Images/Product/battery.jpg";
import batterymobile from "../../Images/Product/batterymobile.jpg";
import plant from "../../Images/Product/plant.jpg";
import plantmobile from "../../Images/Product/plantmobile.jpg";
import planticon from "../../Images/Product/planticon.png";
import skull from "../../Images/Product/skullcandyicon.png";
import feel from "../../Images/Product/feel.png";
const Product = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.herocontainer}>
        <ScrollAddToCart />
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
        />
        <ProductDescription />
      </div>
      <Section
        src1={tile}
        src2={tilemobile}
        title="Don’t worry, you’ve got Tile."
        des="Hesh Evo features built-in Tile® finding technology. If you ever misplace your headphones, you can easily “ring” them from the Tile App. So what might have seemed lost, is now quickly found."
      />
      <Section
        src1={battery}
        src2={batterymobile}
        title="Battery to listen on and on."
        des="We know: It’s hard to remember to plug in all the devices you have in your life. That’s why Hesh Evo features a long-lasting 36 hours of battery life. Plus, whenever you get low, the Rapid Charge feature gives you 3 hours of listening time on just a 10-minute charge."
        left
      />
      <div className={`${classes.fancy} justifycenter`}>
        <img src={skull} alt="icon" />
        <Typography variant="h4">
          Only Skullcandy headphones are custom-tuned to deliver music you can
          feel. From the lyrics in your soul to the bass in your bones.
        </Typography>
        <img src={feel} alt="icon" />
      </div>
      <div className={classes.productcontainer}>
        <Section src1={plant} src2={plantmobile} />
        <div className={`${classes.contentstory} justifycenter  `}>
          <div style={{ width: "30%", marginBottom: "20px" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={planticon}
              alt="icon"
            />
          </div>
          <Typography variant="body1">
            We spend hundreds of hours designing, testing and perfecting every
            Skullcandy product in our Park City, Utah headquarters. But our
            engineers aren’t your typical corporate lab-coat-wearing
            technicians. They’re people who love music. They live for adventure.
            And they know what it’s like to work on the go. Probably a lot like
            you.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Product;
