import React from "react";
import useStyles from "./Styles";
import Hero from "../../Components/Hero";
import Card from "../../Components/Card";
import Section from "../../Components/Section";
import homesection from "../../Images/homesection.jpg";
import homesectionmobile from "../../Images/homesectionmobile.jpg";
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Hero />
      <Card />
      <Section
        title="your new workout partner"
        btn="shop push ultra"
        des=" With 40 hours of battery life and secure, comfortable ear hooks,
          workout-ready Push™ Ultra earbuds are built to keep up with you."
        src1={homesection}
        src2={homesectionmobile}
      />
    </div>
  );
};

export default Home;
