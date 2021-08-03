import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./Styles";
import Hero from "../../Components/Hero";

const heroItems = [
  {
    id: 0,
    title: "Minimalism and varsitality",
  },
];

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Hero />
    </div>
  );
};

export default Home;
