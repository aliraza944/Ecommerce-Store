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
        className={`${classes.sectiontext} `}
        style={{ left: `${props.left && "1.5%"}` }}
      >
        {props.title && <Typography variant="h4">{props.title}</Typography>}
        {props.des && <Typography variant="body1">{props.des}</Typography>}
        <div>
          {props.price && (
            <Typography variant="body1">{props.price}$</Typography>
          )}
        </div>
        {props.btn && <StyledButton title={props.btn}></StyledButton>}
      </div>
    </div>
  );
};

export default Section;
