import React from "react";
import { Grid, TextField, Typography } from "@material-ui/core";

import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import useStyles from "./Styles";
import FooterItems from "./FooterItems";
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.gridcontainer}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={4}>
            <div className="justifycenter" style={{ flexDirection: "column" }}>
              <Typography variant="h5">Hear it first</Typography>

              <TextField
                id="outlined-basic"
                label="Sign up"
                variant="outlined"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <FooterItems />
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="justifycenter" style={{ flexDirection: "column" }}>
              <Typography variant="h5">Follow Us</Typography>
              <div className={classes.social}>
                <TwitterIcon />
                <FacebookIcon />
                <InstagramIcon />
                <YouTubeIcon />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={classes.bottomfooter}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          display="flex"
          style={{ textAlign: "center" }}
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
              Prviacy Policiy | Term of Use | California Notice of Collection
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
              © 2021 Skullcandy.com All Rights Reserved{" "}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
