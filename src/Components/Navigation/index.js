import React from "react";
import useStyles from "./Styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useOpen from "../../Hooks/useOpen";
import Modal from "@material-ui/core/Modal";
import { Paper } from "@material-ui/core";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";

import ModalElements from "./ModalElements";
const Navigation = () => {
  const { open, handleClose, handleOpen } = useOpen();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="transparent">
        <Toolbar>
          <div className={`justifyspacebetween ${classes.navelements}`}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <div>
              <Typography
                variant="h6"
                className={classes.title}
                onClick={() => handleOpen()}
              >
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="justifycenter"
      >
        <Paper className={classes.modalpaper}>
          <HighlightOffRoundedIcon
            className={classes.closeicon}
            onClick={() => handleClose()}
            fontSize="large"
          />
          <div className={classes.modalelements}>
            <ModalElements />
          </div>
        </Paper>
      </Modal>
    </div>
  );
};

export default Navigation;
