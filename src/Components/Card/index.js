import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import StyledButton from "../StyledButton";
import useStyles from "./Styles";
import { Link } from "react-router-dom";

export default function ProductCard({ image, imagehover, slider }) {
  const classes = useStyles();

  return (
    <Link to="/product">
      <Card className={classes.root} square>
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          {!slider && (
            <React.Fragment>
              <div className={classes.contentcontainer}>
                <img src={imagehover} alt="hovered" />
              </div>
              <div className={classes.contentbutton}>
                <StyledButton title="shop" />
              </div>
            </React.Fragment>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
