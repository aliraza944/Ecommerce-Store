import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: "0 0 0 0 ",
    minWidth: 45,
    width: "100%",
    position: "relative",

    "& .MuiCardContent-root": {
      position: "absolute",
      top: "0",
      width: "100%",
      height: "516px",
      padding: "0",
      margin: "0",

      display: "none",
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
    },
    "& :hover +  .MuiCardContent-root": {
      display: "block",
    },
    "& .MuiCardContent-root:hover": {
      display: "block",
    },
  },
  contentcontainer: {
    position: "relative",
    height: "100%",
  },

  contentbutton: {
    position: "absolute",
    top: "85%",
    left: "33%",
  },

  media: {
    height: 516,
  },
});
export default useStyles;
