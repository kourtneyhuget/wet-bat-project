import React from "react";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { TableBody } from "@material-ui/core";
import "../styles/PopularPackages.scss";
import MaximizeIcon from "@material-ui/icons/Maximize";

// custom brand colours
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5BBFBA",
    },
    secondary: {
      main: "#5F6CAF",
    },
    text: {
      primary: "#A9A9A9",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    // maxWidth: "36ch",
    maxHeight: 430,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export function PopularPackages(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <TableContainer className={classes.root} component={Paper}>
        <Table>
          <TableHead>
            <TableCell align="center" colSpan={5} style={{ color: "#5BBFBA" }}>
              <span id="title">POPULAR PACKAGES</span>
            </TableCell>
          </TableHead>
          <TableBody>
            <div className="poplar-package-container">
              <div className="package-text">
                <p>Lorem ipsum dolor sit </p>
                <br />
                <p>Lorem ipsum dolor sit</p>
                <br />
                <p>Lorem ipsum dolor sit</p>
                <br />
                <p>Lorem ipsum dolor sit</p>
                <br />
                <p>Lorem ipsum dolor sit</p>
              </div>
              <img
                className="world-map"
                src="http://assets.stickpng.com/thumbs/5a02c5a318e87004f1ca43be.png"
                alt="world map"
              />
            </div>
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
