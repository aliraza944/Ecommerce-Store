import React from "react";
import useStyles from "./Styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useOpen from "../../Hooks/useOpen";
const Navigation = () => {
  const { open, handleClose, handleOpen } = useOpen();
  console.log(open);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={`justifyspacebetween ${classes.navelements}`}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon onClick={() => handleOpen()} />
            </IconButton>
            <div>
              <Typography variant="h6" className={classes.title}>
                Catalog
              </Typography>
            </div>
            <div className="justifyspacearound">
              <Typography variant="h6" className={classes.title}>
                Bag(0)
              </Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
