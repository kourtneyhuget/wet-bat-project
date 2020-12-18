import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import HomeIcon from "@material-ui/icons/Home";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BlurLinearIcon from "@material-ui/icons/BlurLinear";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import ReceiptIcon from "@material-ui/icons/Receipt";
import TimelineIcon from "@material-ui/icons/Timeline";
import PeopleIcon from "@material-ui/icons/People";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "lightgrey",
    color: "#5F6CAF",
    height: "100%",
    // maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
}));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

export function SideNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon style={{ color: "#5F6CAF" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AttachMoneyIcon style={{ color: "#5F6CAF" }} />
          </ListItemIcon>
          <ListItemText primary="Quotes" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BlurLinearIcon style={{ color: "#5F6CAF" }} />
          </ListItemIcon>
          <ListItemText primary="Leads" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FlightTakeoffIcon style={{ color: "#5F6CAF" }} />
          </ListItemIcon>
          <ListItemText primary="Tours" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <ReceiptIcon style={{ color: "#5F6CAF" }} />
          </ListItemIcon>
          <ListItemText primary="Invoices" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TimelineIcon style={{ color: "#5F6CAF" }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon style={{ color: "#5F6CAF" }} />
          </ListItemIcon>
          <ListItemText primary="Team" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BusinessCenterIcon style={{ color: "#5F6CAF" }} />
          </ListItemIcon>
          <ListItemText primary="Admin" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactSupportIcon style={{ color: "#5F6CAF" }} />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
      </List>
    </div>
  );
}
