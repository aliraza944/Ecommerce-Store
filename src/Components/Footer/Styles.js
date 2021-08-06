import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "40px 0",
    backgroundColor: "black",
    "& .MuiTypography-root": {
      color: "white",
    },
    "& .MuiAccordion-rounded:first-child": {
      borderRadius: "0px",
    },
    "& .MuiButtonBase-root": {
      backgroundColor: "black",
      padding: "10px 10px",
    },
    "& .MuiSvgIcon-root": {
      fill: "white",
    },
    "& .MuiAccordion-root": {
      borderBottom: "1px solid white",
      margin: "10px 0 0 0",
    },
    "& .MuiAccordionDetails-root": {
      backgroundColor: "black",
    },
    "& li": {
      marginTop: "10px",
      textTransform: "capitalize",
      color: "white",
      listStyle: "none",
      cursor: "pointer",
    },
    "& .MuiFormControl-root": {
      backgroundColor: "white",
    },
  },
  social: {
    "& .MuiSvgIcon-root": {
      margin: "20px 20px 0 0",
    },
  },
  listitems: {
    width: "100%",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
    "& .li": {
      color: "white",
    },
  },
  gridcontainer: {
    margin: "0 0 20px 0",
  },

  bottomfooter: {
    borderTop: "1px solid #2c2c2d",
    padding: "20px 0 0 0 ",
  },
}));
export default useStyles;
