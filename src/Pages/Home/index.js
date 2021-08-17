import React from "react";
import useStyles from "./Styles";
import Hero from "../../Components/Hero";
import Card from "../../Components/Card";
import Section from "../../Components/Section";
import homesection from "../../Images/homesection.jpg";
import homesectionmobile from "../../Images/homesectionmobile.jpg";
import Slider from "../../Components/Slider";
import { Grid, Hidden } from "@material-ui/core";
import { carddata } from "./CardSectionData";
import homesection2mobile from "../../Images/homesection2mobile.jpg";
import homesection2 from "../../Images/homesection2.jpg";
import homesection3mobile from "../../Images/homesection3mobile.jpg";
import homesection3 from "../../Images/homesection3.jpg";
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Hero />
      <Hidden smUp>
        <Slider />
      </Hidden>
      <Hidden xsDown>
        <Grid container spacing={0}>
          {carddata.map((item) => {
            return (
              <Grid key={item.id} item xs={4}>
                <Card image={item.image} imagehover={item.imagehover} />
              </Grid>
            );
          })}
        </Grid>
      </Hidden>
      <Section
        title="your new workout partner"
        btn="shop push ultra"
        des=" With 40 hours of battery life and secure, comfortable ear hooks,
          workout-ready Push™ Ultra earbuds are built to keep up with you."
        src1={homesection}
        src2={homesectionmobile}
      />
      <Section src1={homesection2} src2={homesection2mobile} />
      <Section src1={homesection3} src2={homesection3mobile} />
    </div>
  );
};

export default Home;
