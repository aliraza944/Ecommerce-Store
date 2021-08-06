import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles, Typography, Hidden } from "@material-ui/core";
import useStyles from "./Styles";
const FooterItems = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.listitems}>
        <div className="justifycenter" style={{ alignItems: "flex-start" }}>
          <ul>
            <li>
              <Typography variant="body1">Help Center</Typography>
            </li>
            <li>
              <Typography variant="body1">Warranty</Typography>
            </li>
            <li>
              <Typography variant="body1">Contact Us</Typography>
            </li>
            <li>
              <Typography variant="body1">Product Help</Typography>
            </li>
            <li>
              <Typography variant="body1">Order Status</Typography>
            </li>
            <li>
              <Typography variant="body1">Recycling</Typography>
            </li>
            <li>
              <Typography variant="body1">Pay Later with Klarna</Typography>
            </li>
          </ul>

          <ul>
            <li>
              <Typography variant="body1">Discount Programm</Typography>
            </li>

            <li>
              <Typography variant="body1">Product slector</Typography>
            </li>
            <li>
              <Typography variant="body1"> custom Product</Typography>
            </li>
            <li>
              <Typography variant="body1">bulk orders</Typography>
            </li>
            <li>
              <Typography variant="body1">press release</Typography>
            </li>
            <li>
              <Typography variant="body1">sound advice</Typography>
            </li>
          </ul>

          <ul>
            <li>
              <Typography variant="body1">about</Typography>
            </li>
            <li>
              <Typography variant="body1">born in pc</Typography>
            </li>
            <li>
              <Typography variant="body1">protect our winters</Typography>
            </li>
            <li>
              <Typography variant="body1">Careers</Typography>
            </li>
          </ul>
        </div>
      </div>

      <Hidden mdUp>
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="body1" className={classes.heading}>
              Support
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>
                <Typography variant="body1">Help Center</Typography>
              </li>
              <li>
                <Typography variant="body1">Warranty</Typography>
              </li>
              <li>
                <Typography variant="body1">Contact Us</Typography>
              </li>
              <li>
                <Typography variant="body1">Product Help</Typography>
              </li>
              <li>
                <Typography variant="body1">Order Status</Typography>
              </li>
              <li>
                <Typography variant="body1">Recycling</Typography>
              </li>
              <li>
                <Typography variant="body1">Pay Later with Klarna</Typography>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="body1" className={classes.heading}>
              Offer
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>
                <Typography variant="body1">Discount Programm</Typography>
              </li>

              <li>
                <Typography variant="body1">Product slector</Typography>
              </li>
              <li>
                <Typography variant="body1"> custom Product</Typography>
              </li>
              <li>
                <Typography variant="body1">bulk orders</Typography>
              </li>
              <li>
                <Typography variant="body1">press release</Typography>
              </li>
              <li>
                <Typography variant="body1">sound advice</Typography>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="body1" className={classes.heading}>
              About
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>
                <Typography variant="body1">about</Typography>
              </li>
              <li>
                <Typography variant="body1">born in pc</Typography>
              </li>
              <li>
                <Typography variant="body1">protect our winters</Typography>
              </li>
              <li>
                <Typography variant="body1">Careers</Typography>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </Hidden>
    </div>
  );
};

export default FooterItems;
