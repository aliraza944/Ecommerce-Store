import React from "react";
import useStyles from "./Styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useOpen from "../../Hooks/useOpen";
import { Hidden, Drawer } from "@material-ui/core";
import WorkOutlineRoundedIcon from "@material-ui/icons/WorkOutlineRounded";

const Navigation = () => {
  const { open, handleClose, handleOpen } = useOpen();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="black">
        <Toolbar>
          <div className={`justifyspacebetween ${classes.navelements}`}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => handleOpen()}
            >
              <MenuIcon />
            </IconButton>

            <svg
              id="skullcandy-logo-bc"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 107.72 19.69"
              style={{ width: "150px" }}
            >
              <title>Skullcandy Logo</title>
              <path
                d="M23.7,8.05C20.24,7.17,19.58,7,19.58,6S20.7,4.4,21.67,4.4c1.45,0,2.63.42,2.72,2.09h2.94C27.33,3.3,24.68,2,21.8,2c-2.49,0-5.16,1.35-5.16,4.18,0,2.59,2.07,3.38,4.12,3.92s4.1.79,4.1,2.28-1.62,1.72-2.69,1.72c-1.62,0-3.06-.72-3.06-2.55H16.18c0,3.4,2.82,4.91,5.88,4.91,3.75,0,5.74-1.89,5.74-4.43C27.8,8.94,24.7,8.3,23.7,8.05ZM38,6.18H34.79L31.33,9.77V2.37H28.59v13.8h2.75V12.73l1.06-1,2.74,4.46h3.32L34.27,9.85Zm7.06,5.24c0,2-.64,2.86-2.12,2.86-1.28,0-1.76-.81-1.76-2.45V6.18H38.47v6.15c0,2.47.74,4.12,3.65,4.12a3.57,3.57,0,0,0,3.05-1.66h.06v1.39h2.61v-10H45.1ZM10.9,5.35C10.36,3.86,14,0,7.33,0,1.65,0,1.12,5.64.87,6.08A5,5,0,0,0,.06,7.72c-.15.73,0,1.53.47,1.53.7,0-.16-1.41.7-1.41,1.09,0,2.37,1.77,2.72,2.77-.58,1-1.4,1.73-2,1.45a1.78,1.78,0,0,1-1.2-1.61c0-.65-.6-.63-.54.2A3.07,3.07,0,0,0,1.61,13a7.62,7.62,0,0,1,2.14,2.69c.27.66.62,1,1.59,1s.23.84.89.84.27-.93.66-.93,0,.89.74.89c1.13,0,.62-1.41,1-1.65s5.21-2.82,5.13-6S11.45,6.84,10.9,5.35Zm-4.74,9a2.26,2.26,0,0,0-1.79-.2c-.43.16-.85-.08-.5-1.17a6.06,6.06,0,0,1,.7-1.57A25.36,25.36,0,0,1,6.9,14.2C6.94,14.52,6.43,14.64,6.16,14.32Zm3.3-1.81A2.62,2.62,0,1,1,12,9.9,2.57,2.57,0,0,1,9.46,12.51ZM83,5.91a3.56,3.56,0,0,0-3.05,1.66h-.06V6.18H77.27v10H80V10.93c0-2,.64-2.86,2.12-2.86,1.28,0,1.76.81,1.76,2.45v5.64h2.75V10C86.65,7.55,85.91,5.91,83,5.91Zm21.88.27L102.69,13h0l-2.26-6.84H97.51V2.37H94.77v5h0a3.44,3.44,0,0,0-3-1.49c-2.94,0-4.42,2.49-4.42,5.18s1.47,5.35,4.48,5.35a3.32,3.32,0,0,0,3-1.55h0v1.28h2.61V6.33L101,15.55a1.29,1.29,0,0,1-.95,1.87,14.14,14.14,0,0,1-1.6-.1v2.26a16.57,16.57,0,0,0,1.68.09,3.14,3.14,0,0,0,3.44-2.26l4.17-11.25ZM92.5,14.37c-1.7,0-2.41-1.64-2.41-3.21S90.71,8,92.5,8s2.36,1.55,2.36,3.17S94.32,14.37,92.5,14.37ZM49,16.17h2.75V2.37H49ZM76.11,8.75c0-2.4-2.4-2.84-4.39-2.84-2.24,0-4.54.77-4.7,3.34h2.75c.09-1.08.77-1.51,1.82-1.51s1.78.17,1.78,1.35-1.56,1.06-3.24,1.31-3.4.77-3.4,3c0,2,1.51,3,3.4,3a4.58,4.58,0,0,0,3.36-1.24,4.07,4.07,0,0,0,.19,1h2.78a5.13,5.13,0,0,1-.35-2.22ZM73.36,12.3a2,2,0,0,1-2.22,2.3c-.89,0-1.68-.25-1.68-1.28s.77-1.29,1.62-1.47a5.43,5.43,0,0,0,2.28-.58ZM53.07,16.17h2.75V2.37H53.07Zm8.66-1.8c-1.72,0-2.28-1.72-2.28-3.15S60,8,61.78,8a1.87,1.87,0,0,1,2,1.72H66.5c-.17-2.55-2.34-3.79-4.69-3.79-3.25,0-5.1,2.3-5.1,5.41a4.85,4.85,0,0,0,5,5.12,4.47,4.47,0,0,0,4.81-4.1H63.91A2.11,2.11,0,0,1,61.73,14.37Z"
                style={{ fill: "#fff" }}
              ></path>
            </svg>

            <div className="justifyspacearound">
              <WorkOutlineRoundedIcon />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.modalelements}>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={open}
            onClose={handleClose}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <Typography variant="h1">hello</Typography>
          </Drawer>
        </Hidden>
      </div>
    </div>
  );
};

export default Navigation;
