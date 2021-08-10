import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import batteryicon from "../../Images/Product/productbatteryicon.png";
import rapidcharge from "../../Images/Product/productrapidchargeicon.png";
import folding from "../../Images/Product/productfoldingicon.png";
import callicon from "../../Images/Product/productcallicon.png";
import noiseicon from "../../Images/Product/productnoiseicon.png";
import tileicon from "../../Images/Product/producttileicon.png";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1C79BF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "10px 20px",
    maxWidth: "600px",
    position: "static",

    [theme.breakpoints.up("md")]: {
      backgroundColor: "transparent",

      position: "absolute",
      top: "20%",
    },
  },
  producticons: {
    width: "100%",
    height: "40px",
    margin: "20px 0 0 0",
    justifyContent: "flex-start",
    "& img": {
      height: "100%",
      margin: "0 30px 0 0",
    },
    "& .MuiTypography-body2": {
      textTransform: "capitalize",
    },
  },
}));

const ProductFeatures = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={`${classes.producticons} justifycenter`}>
        <img src={batteryicon} alt="icon" />
        <Typography variant="body2"> Upto 36 hours of battery</Typography>
      </div>
      <div className={`${classes.producticons} justifycenter`}>
        <img src={rapidcharge} alt="icon" />
        <Typography variant="body2"> rapid charge (10min =3hr)</Typography>
      </div>
      <div className={`${classes.producticons} justifycenter`}>
        <img src={tileicon} alt="icon" />
        <Typography variant="body2">
          {" "}
          Built-in Tile® Finding Technology
        </Typography>
      </div>
      <div className={`${classes.producticons} justifycenter`}>
        <img src={folding} alt="icon" />
        <Typography variant="body2"> flat-folding and collapseable</Typography>
      </div>
      <div className={`${classes.producticons} justifycenter`}>
        <img src={callicon} alt="icon" />
        <Typography variant="body2">call, track and volume control</Typography>
      </div>
      <div className={`${classes.producticons} justifycenter`}>
        <img src={noiseicon} alt="icon" />
        <Typography variant="body2">noise-isolating fit </Typography>
      </div>
    </div>
  );
};

export default ProductFeatures;
