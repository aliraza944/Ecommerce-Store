import { Typography, Button, Grid } from "@material-ui/core";
import React from "react";
import herolg from "../../Images/hero-lg.jpg";
import herosm from "../../Images/rsz_hero-sm.jpg";
import heroadd from "../../Images/hero-add.jpg";
import herogif from "../../Images/hero-gif.gif";
import useStyles from "./Styles";
// style={{ height: "50vh" }}

const Hero = (props) => {
  const classes = useStyles();
  return (
    <div className={`justifycenter ${classes.root}`}>
      <Grid container spacing={0} className={classes.gridparent}>
        <Grid item xs={12} sm={9} className={classes.griditem}>
          {" "}
          <div className={classes.heroimage}>
            <picture>
              <source media="(min-width : 600px)" srcset={herolg}></source>
              <img src={herosm} alt="heroimage" />
            </picture>
          </div>
          <div className={classes.herotextsection}>
            <Typography className={classes.herotexttitle} variant="h1">
              KYUSS KING EXCLUSIVE.
            </Typography>
            <Typography variant="body1" classname={classes.herotext}>
              We teamed up with pro surfer, artist and Boundary Breaker Kyuss
              <br />
              King to add edgy style to one of our best-sellers.
            </Typography>
            <div>
              <Button variant="contained">SHop sesh evo custom</Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.griditem}>
          <div className={classes.columnitems}>
            <img src={heroadd} alt="add"></img>
          </div>
          <div className={`${classes.columnitems} ${classes.herogif}`}>
            <img src={herogif} alt="gif"></img>
            <div className={classes.giftextsection}>
              <Typography className={classes.giftexttitle} variant="h4">
                unleash your listning
              </Typography>
              <Typography variant="body1">Shop true wireless</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
