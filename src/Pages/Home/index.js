import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./Styles";
import Hero from "../../Components/Hero";
import Card from "../../Components/Card";

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Hero />
      <Card />
    </div>
  );
};

export default Home;
