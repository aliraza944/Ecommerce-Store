import { Typography, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useStyles from "./Styles";
const ScrollAddToCart = () => {
  const classes = useStyles();
  const [scroll, setScroll] = useState("hide");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY < 1000 || window.scrollY > 5000) {
        setScroll("hide");
      } else {
        setScroll("show");
      }
    });
  });

  return (
    <div className={`${classes.root}  ${classes[scroll]}`}>
      <div className={classes.nameandprice}>
        <Typography variant="body1">Hesh® Evo Wireless Headphones</Typography>

        <Typography variant="body1">$79.99</Typography>
      </div>
      <Button variant="contained" className={classes.cartbtn}>
        ADD TO CART
      </Button>
    </div>
  );
};

export default ScrollAddToCart;
