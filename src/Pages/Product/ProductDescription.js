import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import icon1 from "../../Images/Product/product3icon1.jpg";
import icon2 from "../../Images/Product/product3icon2.jpg";
import icon3 from "../../Images/Product/product3icon3.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "40%",
    width: "100%",
    textAlign: "center",
    [theme.breakpoints.up("800")]: {
      width: "30%",
      top: "45%",
    },
    "& .MuiTypography-root": {
      color: "black",
    },
    "& .MuiTypography-h5": {
      fontWeight: "600",
      marginBottom: "10px",
      textTransform: "uppercase",
    },
  },
  container: {
    margin: "10px 0 0 0",
  },
}));

const ProductDescription = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root}`}>
      <div className={classes.container}>
        <img src={icon1} alt="icons" />
        <Typography variant="h5">Easy conviniet controls</Typography>
        <Typography variant="body1">
          Simple, intuitive buttons let you take calls, adjust volume and change
          tracks without ever touching your phone.
        </Typography>
      </div>
      <div className={classes.container}>
        <img src={icon2} alt="icons" />
        <Typography variant="h5">Comfort for hours.</Typography>
        <Typography variant="body1">
          With an ultralight headband and soft pads that fully surround your
          ears, Hesh Evo is one of the most comfortable headphones you’ll ever
          put on.
        </Typography>
      </div>
      <div className={classes.container}>
        <img src={icon3} alt="icons" />
        <Typography variant="h5">Go-anywhere design.</Typography>
        <Typography variant="body1">
          Thanks to rugged, innovative hinges that both fold flat and collapse,
          Hesh Evo easily goes wherever you go.
        </Typography>
      </div>
    </div>
  );
};

export default ProductDescription;
