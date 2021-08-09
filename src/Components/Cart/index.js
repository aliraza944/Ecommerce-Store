import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Button,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import useStyles from "./Styles";
import blue92 from "../../Images/92blue.jpg";
import black92 from "../../Images/92black.jpg";
import StyleButton from "../../Components/StyledButton";
import VideoCallIcon from "@material-ui/icons/VideoCall";
const Cart = () => {
  const [product, setProduct] = useState("");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="body2">
        4 interest-free payments of $19.99 with <b>Kalanra</b>
        <br />
      </Typography>
      <Typography variant="body2">
        <u> Learn More</u>{" "}
      </Typography>
      <div className={classes.reviewcount}>
        <StarIcon fontSize="small" />
        <StarIcon fontSize="small" />
        <StarIcon fontSize="small" />
        <StarIcon fontSize="small" />
        <StarIcon fontSize="small" />
        <Typography variant="body1">105 Reviews</Typography>
      </div>
      <FormControl variant="filled" className={classes.formcontrol}>
        <InputLabel id="demo-simple-select-outlined-label">
          <img src={blue92} alt="blue92" />{" "}
          <Typography variant="body2">92 blue</Typography>
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={product}
          label=""
          IconComponent={AddIcon}
        >
          <MenuItem className={classes.menuitems} value={10}>
            {" "}
            <img
              src={blue92}
              alt="blue92"
              style={{
                height: "100%",
                margin: "0 10px 0 0 ",
              }}
            />{" "}
            <Typography variant="body2">92 Blue</Typography>
          </MenuItem>
          <MenuItem className={classes.menuitems} value={20}>
            {" "}
            <img
              src={black92}
              alt="black92"
              style={{
                height: "100%",
                margin: "0 10px 0 0 ",
              }}
            />{" "}
            <Typography variant="body2">92 Black</Typography>
          </MenuItem>
          <MenuItem className={classes.menuitems} value={30}>
            {" "}
            <img
              src={blue92}
              alt="blue92"
              style={{
                height: "100%",
                margin: "0 10px 0 0 ",
              }}
            />{" "}
            <Typography variant="body2">92 Blue</Typography>
          </MenuItem>
        </Select>
      </FormControl>
      <div className={classes.cartbutton}>
        <StyleButton title="1" />
        <Button variant="contained" className={classes.cartbtn}>
          {" "}
          Add to Cart
        </Button>
      </div>
      <div className={classes.productandreview}>
        <Typography variant="body1" style={{ borderRight: "1px solid #fff" }}>
          <VideoCallIcon /> Product Video{" "}
        </Typography>
        <Typography variant="body1">
          <StarIcon /> Reviews
        </Typography>
      </div>
    </div>
  );
};

export default Cart;
