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

// material ui - table styling
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 250,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export function PotentialRevenue() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <TableContainer className={classes.root} component={Paper}>
        <Table>
          <TableHead>
            <TableCell align="center" colSpan={5} style={{ color: "#5BBFBA" }}>
              <span id="title">POTENTIAL REVENUE</span>
            </TableCell>
          </TableHead>
          <TableBody>
            <img
              className="pie-chart-image"
              src="https://images.vexels.com/media/users/3/130343/isolated/preview/617e25c481c3d5c6d536ad89260c99f7-flat-colorful-pie-chart-by-vexels.png"
              alt="pie chart"
            />
            <img
              className="pie-chart-image"
              src="https://innohear.com/wp-content/uploads/2017/12/1-quarter.png"
              alt="pie chart"
            />
            <img
              className="pie-chart-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vtl1CTt0zdTstsmyrbpa47IQxWUSHQrswg&usqp=CAU"
              alt="pie chart"
            />
            <img
              className="pie-chart-image"
              src="https://images.vexels.com/media/users/3/129856/isolated/preview/83b8b3382c3f8f1ac4a8b16c5388360f-colorful-four-parts-pie-chart-by-vexels.png"
              alt="pie chart"
            />
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
