import Axios from "axios";
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
import "../styles/PendingQuotes.scss";

const useStyles = makeStyles(() => ({
  container: {
    maxHeight: 500,
    maxWidth: "90%",
    borderRadius: 0,
  },
}));

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

export function PendingQuotes(props) {
  const classes = useStyles();
  // const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState([]);
  const [pending, setPending] = useState([]);

  console.log("THIS IS PENDING", pending);
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

  // close the pending quote
  const moveTask = async (quoteId) => {
    axios
      .put(`api/quotescompleted/${quoteId}`, {
        selectedId: quoteId,
      })
      .then((res) => {
        console.log("MADE IT TO THE BACKEND");
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
              <TableRow>
                <TableCell>NAME</TableCell>
                <TableCell></TableCell>
                <TableCell>PHONE</TableCell>
                <TableCell>FROM</TableCell>
                <TableCell>DEPART</TableCell>
                <TableCell>RETURN</TableCell>
                <TableCell>PRICE</TableCell>
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
                  <TableCell>{quote.departure_location}</TableCell>
                  <TableCell>{quote.depart_date.slice(0, 10)}</TableCell>
                  <TableCell>{quote.return_date.slice(0, 10)}</TableCell>
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
