import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiAppBar-root": {
      boxShadow: "none",
    },
  },
  menuButton: {
    flexShrink: 0,
  },
  title: {
    flexGrow: 0,
  },
  navelements: {
    width: "100%",
  },
}));
export default useStyles;
