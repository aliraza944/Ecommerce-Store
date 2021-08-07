import React from "react";
import useStyles from "./Styles";
import StyledButton from "../StyledButton";

import { Typography } from "@material-ui/core";
const Section = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <picture className={classes.sectionimage}>
        <source media="(min-width : 600px)" srcSet={props.src1}></source>
        <img src={props.src2} alt="heroimage" />
      </picture>
      <div
        className={`${classes.sectiontext} justifycenter`}
        style={{ right: `${props.left && "55%"}` }}
      >
        {props.title && <Typography variant="h5">{props.title}</Typography>}
        {props.des && <Typography variant="body1">{props.des}</Typography>}
        {props.btn && <StyledButton title={props.btn}></StyledButton>}
      </div>
    </div>
  );
};

export default Section;
