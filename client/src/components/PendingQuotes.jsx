import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableFooter from "@material-ui/core/TableFooter";
import { Button } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import OpenWithIcon from "@material-ui/icons/OpenWith";
import "../styles/PendingQuotes.scss";
import { Link } from "react-router-dom";

// material ui - table styling
const useStyles = makeStyles(() => ({
  container: {
    maxHeight: 550,
  },
}));

// custom brand colors
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

export function PendingQuotes(props) {
  const classes = useStyles();
  const [selectedId, setSelectedId] = useState([]);
  const [pending, setPending] = useState([]);

  const handleChange = (event) => {
    setSelectedId(event.target.value);
  };

  //render all pending quotes
  const getPending = async (event) => {
    try {
      const response = await fetch("/api/pending");
      const jsonData = await response.json();
      setPending(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPending();
  }, [props.updatePending]);

  // update pending quotes from is_converted false to true when "close" button is clicked
  const moveTask = async (quoteId) => {
    axios
      .put(`api/quotescompleted/${quoteId}`, {
        selectedId: quoteId,
      })
      .then((res) => {
        setPending(pending.filter((quote) => quote.id !== quoteId));
        props.updateCompletedQuotes();
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  return (
    <div className="pending-quote-container">
      <ThemeProvider theme={theme}>
        <TableContainer className={classes.container} component={Paper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableCell colSpan={11} style={{ color: "#5BBFBA" }}>
                <div className="title-icon">
                  <span>PENDING QUOTES</span>
                  <span id="icon">
                    <Link to="/detailedquotes" className="icon-link">
                      <OpenWithIcon />
                    </Link>
                  </span>
                </div>
              </TableCell>
              <TableRow>
                <TableCell style={{ color: "#F0CF85" }}>NAME</TableCell>
                <TableCell></TableCell>
                <TableCell style={{ color: "#F0CF85" }}>PHONE</TableCell>
                <TableCell style={{ color: "#F0CF85" }}>TO</TableCell>
                <TableCell style={{ color: "#F0CF85" }}>DEPART</TableCell>
                <TableCell style={{ color: "#F0CF85" }}>PRICE</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pending.map((quote, index) => (
                <TableRow key={quote.id}>
                  <TableCell component="th" scope="row">
                    {quote.first_name}
                  </TableCell>
                  <TableCell>{quote.last_name}</TableCell>
                  <TableCell>{quote.phone_number}</TableCell>
                  <TableCell>{quote.destination_location}</TableCell>
                  <TableCell>{quote.depart_date.slice(0, 10)}</TableCell>
                  <TableCell>${quote.price}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => moveTask(quote.id)}
                      onChange={handleChange}
                      variant="contained"
                      size="large"
                      color="primary"
                      type="submit"
                    >
                      CLOSE
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell></TableCell>
                <TableCell className="icons-style"></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </div>
  );
}
