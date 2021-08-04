import { Typography, Button } from "@material-ui/core";
import React from "react";
import herolg from "../../Images/hero-lg.jpg";
import herosm from "../../Images/rsz_hero-sm.jpg";
import useStyles from "./Styles";

const Hero = (props) => {
  const classes = useStyles();
  return (
    <div className={`justifycenter ${classes.root}`}>
      <div className={classes.heroimage}>
        <picture>
          <source media="(min-width :600px)" srcSet={herolg}></source>
          <img src={herosm} alt="heroimage" />
        </picture>
      </div>
      <div className={classes.herotextsection}>
        <Typography className={classes.herotexttitle} variant="h1">
          KYUSS KING EXCLUSIVE.
        </Typography>
        <Typography variant="body1" classname={classes.herotext}>
          We teamed up with pro surfer, artist and Boundary Breaker Kyuss King
          to add edgy style to one of our best-sellers.
        </Typography>
        <Button>SHop sesh evo custom</Button>
      </div>
    </div>
  );
};

export default Hero;
