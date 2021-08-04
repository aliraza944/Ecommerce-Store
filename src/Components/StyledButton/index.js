import React from "react";
import useStyles from "./Styles";
import { Button, Typography } from "@material-ui/core";
const StyledButton = (props) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      className={classes.root}
      style={{ padding: `${props.large && "20px 10px"}` }}
    >
      <Typography variant="body1">{props.title}</Typography>
    </Button>
  );
};

export default StyledButton;
