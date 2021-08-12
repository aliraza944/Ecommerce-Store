import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
    margin: "0px 0 0 0",
  },
  sectionimage: {
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      verticalAlign: "middle",
    },
  },
  sectiontext: {
    position: "absolute",
    top: "15%",
    right: "0%",
    width: "40%",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      top: "5%",
      textAlign: "center",
      right: "0% !important",
    },
    "& > *": {
      margin: "5px 0 0 0",
    },
    "& .MuiTypography-root": {
      color: "white",
    },
    "& .MuiTypography-h4": {
      fontWeight: "800",
      textTransform: "uppercase",
    },
    "& .MuiTypography-body1": {
      fontWeight: "400",
      textTransform: "uppercase",
    },
    "& .MuiTypography-body2": {
      fontWeight: "400",
      textTransform: "uppercase",
    },
  },
}));

export default useStyles;
