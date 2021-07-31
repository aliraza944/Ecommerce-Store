import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./Styles";

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box></Box>
    </div>
  );
};

export default Home;
