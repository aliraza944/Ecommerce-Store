import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./Styles";

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className="justifycenter">
        <Typography variant="h1"> new arival</Typography>
      </Box>
    </div>
  );
};

export default Home;
