import { Typography } from "@material-ui/core";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import useStyles from "./Styles";

const Hero = (props) => {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundImage: `url(${props.image})  ,linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.1))`,
      }}
      className={classes.root}
    >
      <Typography variant="h4" className={classes.herotitle}>
        Minimalism and varsitality
      </Typography>

      <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
        <div className={classes.bottomprice}>
          <Typography variant="body1">White shirt</Typography>
          <Typography variant="body1">12$</Typography>
        </div>
        <div className={classes.bottombar}>
          <AppBar position="static">
            <Toolbar className="justifyspacebetween">
              <Typography variant="h6" className={classes.title}>
                ...
              </Typography>
              <Typography variant="h5" className={classes.title}>
                New Collection 20/21
              </Typography>
              <Typography variant="body1" className={classes.title}>
                View all
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    </div>
  );
};

export default Hero;
