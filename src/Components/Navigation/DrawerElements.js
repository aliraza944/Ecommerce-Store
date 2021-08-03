import React from "react";
import AddIcon from "@material-ui/icons/Add";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { makeStyles, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: "1px solid black",
    padding: "15px 10px",
  },
  title: {
    textTransform: "uppercase",
  },
}));

const DrawerFlex = (props) => {
  const classes = useStyles();
  return (
    <div className={`justifyspacebetween ${classes.root}`}>
      <Typography className={classes.title} variant="body1">
        {props.title}
      </Typography>
      <AddIcon />
    </div>
  );
};

const DrawerElements = () => {
  return (
    <div>
      <DrawerFlex title="shop" />
      <DrawerFlex title="inside skullcandy" />
      <DrawerFlex title="support" />
      <DrawerFlex title="location" />

      <Box mt={3} display="flex" alignItems="center">
        <PersonOutlineIcon style={{ fontSize: "1.5rem", color: "#969696" }} />
        <Typography
          style={{ fontSize: "1rem", color: "#969696" }}
          variant="body1"
        >
          Account
        </Typography>
      </Box>

      <Box mt={3} display="flex" alignItems="center">
        <SearchOutlinedIcon style={{ fontSize: "1.5rem", color: "#969696" }} />
        <Typography
          style={{ fontSize: "1rem", color: "#969696" }}
          variant="body1"
        >
          Search
        </Typography>
      </Box>
    </div>
  );
};

export default DrawerElements;
