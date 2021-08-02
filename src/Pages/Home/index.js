import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./Styles";
import Hero from "../../Components/Hero";
import image from "../../Images/6.jpg";
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Hero image={image} />
    </div>
  );
};

export default Home;
