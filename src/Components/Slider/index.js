import React, { useState } from "react";
import useStyles from "./Styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { carddata } from "../../Pages/Home/CardSectionData";
import Card from "../Card";

const Slider = () => {
  const [slider, setSlider] = useState(0);
  const classes = useStyles();
  const prevSlide = () => {
    if (slider === 0) {
      setSlider(carddata.length - 1);
    } else {
      setSlider(slider - 1);
    }
  };

  const nextSlide = () => {
    if (slider === carddata.length - 1) {
      setSlider(0);
    } else {
      setSlider(slider + 1);
    }
  };
  return (
    <div className={classes.root}>
      <div>
        <Card image={carddata[slider].image} slider />
      </div>

      <ArrowBackIosIcon
        fontSize="large"
        style={{ left: 0 }}
        className={classes.arrow}
        onClick={prevSlide}
      />
      <ArrowForwardIosIcon
        fontSize="large"
        style={{ right: 0 }}
        className={classes.arrow}
        onClick={nextSlide}
      />
    </div>
  );
};

export default Slider;
