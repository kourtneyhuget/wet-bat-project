import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableFooter from "@material-ui/core/TableFooter";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import axios from "axios";
import { SideNav } from "./SideNav";
import { Header } from "./Header";
import "../styles/DetailedQuotes.scss";

// material ui - table styling
const useStyles = makeStyles(() => ({
  container: {
    maxHeight: 840,
  },
}));

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

export function DetailedQuotes(props) {
  const classes = useStyles();
  const [pending, setPending] = useState([]);
  const [selectedId, setSelectedId] = useState([]);

  const handleChange = (event) => {
    setSelectedId(event.target.value);
  };

  // get all pending quotes
  const getPending = async (event) => {
    try {
      const response = await fetch("/api/pending");
      const jsonData = await response.json();
      setPending(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  // post quotes - update is_converted from false to true when "closed" button is clicked
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

  useEffect(() => {
    getPending();
  }, []);

  return (
    <div className="detailed-quote-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="side-nav-container">
        <SideNav />
      </div>
      <div className="detailed-quote-table">
        <ThemeProvider theme={theme}>
          <TableContainer className={classes.container} component={Paper}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableCell
                  align="center"
                  colSpan={13}
                  style={{ color: "#5BBFBA" }}
                >
                  <span id="title">PENDING QUOTES</span>
                </TableCell>
                <TableRow>
                  <TableCell style={{ color: "#F0CF85" }}>CLIENT ID</TableCell>
                  <TableCell style={{ color: "#F0CF85" }}>NAME</TableCell>
                  <TableCell></TableCell>
                  <TableCell style={{ color: "#F0CF85" }}>PHONE</TableCell>
                  <TableCell style={{ color: "#F0CF85" }}>EMAIL</TableCell>
                  <TableCell style={{ color: "#F0CF85" }}>FROM</TableCell>
                  <TableCell style={{ color: "#F0CF85" }}>TO</TableCell>
                  <TableCell style={{ color: "#F0CF85" }}>DEPART</TableCell>
                  <TableCell style={{ color: "#F0CF85" }}>RETURN</TableCell>
                  <TableCell style={{ color: "#F0CF85" }}>TRAVELERS</TableCell>
                  <TableCell style={{ color: "#F0CF85" }}>
                    TRANSPORTATION
                  </TableCell>
                  <TableCell style={{ color: "#F0CF85" }}>PRICE</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pending.map((quote) => (
                  <TableRow key={quote.id}>
                    <TableCell component="th" scope="row">
                      {quote.client_id}
                    </TableCell>
                    <TableCell>{quote.first_name}</TableCell>
                    <TableCell>{quote.last_name}</TableCell>
                    <TableCell>{quote.phone_number}</TableCell>
                    <TableCell>{quote.email}</TableCell>
                    <TableCell>{quote.departure_location}</TableCell>
                    <TableCell>{quote.destination_location}</TableCell>
                    <TableCell>{quote.depart_date.slice(0, 10)}</TableCell>
                    <TableCell>{quote.return_date.slice(0, 10)}</TableCell>
                    <TableCell>{quote.people}</TableCell>
                    <TableCell>{quote.transportation}</TableCell>
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
    </div>
  );
}
