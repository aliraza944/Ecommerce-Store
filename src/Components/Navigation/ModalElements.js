import { Paper, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    flexDirection: "column",
    backgroundColor: "#fafafa5c",
    "& .MuiTypography-root": {
      fontWeight: "400",
      color: "white",
      margin: "0 0 5px 0",
    },
    "& .MuiPaper-root": {
      boxShadow: "none",
    },
  },
}));
const ModalElements = () => {
  const classes = useStyles();
  return (
    <Paper className={`justifycenter ${classes.root}`}>
      <Typography variant="h3">Hoodie</Typography>
      <Typography variant="h3">Accesories</Typography>
      <Typography variant="h3">Trousers</Typography>
      <Typography variant="h3">Shirts</Typography>
      <Typography variant="h3">Sweaters</Typography>
      <Typography variant="h3">Legings</Typography>
      <Typography variant="h3">Underwears</Typography>
      <Typography variant="h3">Legings</Typography>
    </Paper>
  );
};

export default ModalElements;
