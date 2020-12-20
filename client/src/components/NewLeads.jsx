import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import { createMuiTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// custom brand colors
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5BBFBA",
    },
    secondary: {
      main: "#5F6CAF",
    },
  },
});

// material ui - table styling
const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 500,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export function NewLeads(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <TableContainer className={classes.container} component={Paper}>
        <Table>
          <TableHead>
            <TableCell align="center" colSpan={5} style={{ color: "#5BBFBA" }}>
              <span id="title">NEW LEADS</span>
            </TableCell>
          </TableHead>
        </Table>
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                style={{ color: "#A4D4AE" }}
              />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Ali Connors
                    <br />
                  </Typography>
                  {"- Hey! Please call me at 4538695849"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="/static/images/avatar/2.jpg"
                style={{ color: "#F0CF85" }}
              />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Jennifer Allen
                    <br />
                  </Typography>
                  {"- Hey! I am interested in a package."}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="/static/images/avatar/3.jpg"
                style={{ color: "#E7F0C3" }}
              />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Sandra Adams
                    <br />
                  </Typography>
                  {"- Hey! How much is it to fly to YYC now?"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="/static/images/avatar/3.jpg"
                style={{ color: "#5F6CAF" }}
              />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Sarah Wells
                    <br />
                  </Typography>
                  {"- Hey! I want to play my package."}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="/static/images/avatar/3.jpg"
                style={{ color: "#5BBFBA" }}
              />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Lori Adams
                    <br />
                  </Typography>
                  {"- Hey! I am interested in booking a package."}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="/static/images/avatar/3.jpg"
                style={{ color: "#F0CF85" }}
              />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Mike Baker
                    <br />
                  </Typography>
                  {"- Hey! I want to play my package."}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="/static/images/avatar/3.jpg"
                style={{ color: "#A4D4AE" }}
              />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Henry Williams
                    <br />
                  </Typography>
                  {"- Hey! I was hoping to chat and work out a package price."}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </TableContainer>
    </ThemeProvider>
  );
}
