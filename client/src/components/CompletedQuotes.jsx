import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "../styles/CompletedQuotes.scss";

const useStyles = makeStyles({
  table: {
    width: "10%",
    height: "20%",
  },
  container: {
    maxHeight: 500,
    maxWidth: "80%",
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
            <TableRow>
              <TableCell align="center" colSpan={5}>
                CONVERTED QUOTES TO SERVICES
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell></TableCell>
              <TableCell>PHONE</TableCell>
              <TableCell>PRICE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {completed.map((quote) => (
              <TableRow key={quote.id}>
                <TableCell>{quote.first_name}</TableCell>
                <TableCell>{quote.last_name}</TableCell>
                <TableCell>{quote.phone_number}</TableCell>
                <TableCell>{quote.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
