import React, { useEffect, useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "../styles/CompletedQuotes.scss";
import { createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    width: "10%",
    height: "20%",
  },
  container: {
    maxHeight: 550,
    maxWidth: "80%",
  },
});

//custom brand colors
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

export function CompletedQuotes(props) {
  const classes = useStyles();
  const [completed, setCompleted] = useState([]);

  //render all completed quotes
  const getCompleted = async (event) => {
    try {
      const response = await fetch("/api/completed");
      const jsonData = await response.json();
      setCompleted(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCompleted();
  }, [props.updateCompleted]);

  return (
    <div className="completed-quote-container">
      <TableContainer className={classes.container} component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableCell align="center" colSpan={5} style={{ color: "#5BBFBA" }}>
              <span id="title">CONVERTED QUOTES TO SERVICES</span>
            </TableCell>
            <TableRow>
              <TableCell style={{ color: "#F0CF85" }}>Name</TableCell>
              <TableCell style={{ color: "#F0CF85" }}></TableCell>
              <TableCell style={{ color: "#F0CF85" }}>PHONE</TableCell>
              <TableCell style={{ color: "#F0CF85" }}>PRICE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <ThemeProvider theme={theme}>
              {completed.map((quote) => (
                <TableRow key={quote.id}>
                  <TableCell>{quote.first_name}</TableCell>
                  <TableCell>{quote.last_name}</TableCell>
                  <TableCell>{quote.phone_number}</TableCell>
                  <TableCell>${quote.price}</TableCell>
                </TableRow>
              ))}
            </ThemeProvider>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
