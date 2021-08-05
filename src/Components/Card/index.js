import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import card1 from "../../Images/card1.jpg";
import hcar1 from "../../Images/hcard1.jpg";
import StyledButton from "../StyledButton";
import useStyles from "./Styles";

export default function ProductCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={card1} />
      <CardContent>
        <div className={classes.contentcontainer}>
          <img src={hcar1} alt="hovered" />
        </div>
        <div className={classes.contentbutton}>
          <StyledButton title="shop" />
        </div>
      </CardContent>
    </Card>
  );
}
