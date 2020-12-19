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
import "../styles/RevenueTables.scss";

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
    width: "100%",
    height: 290,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export function Revenue() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <TableContainer className={classes.root} component={Paper}>
        <Table>
          <TableHead>
            <TableCell align="center" colSpan={5} style={{ color: "#5BBFBA" }}>
              <span id="title">REVENUE</span>
            </TableCell>
          </TableHead>
          <TableBody>
            <img
              className="graph-image"
              src="https://images.vexels.com/media/users/3/131136/isolated/preview/4c711c7ec7a01da4a8adf53684a13209-increasing-multicolor-line-chart-by-vexels.png"
              alt="graph chart"
            />
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
