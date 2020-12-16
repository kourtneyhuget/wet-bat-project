import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../styles/QuickQuote.scss";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { CreateAQuote } from "./CreateAQuote";

//drop down options for tranportation text field
const transportations = [
  {
    value: "none",
    label: "none",
  },
  {
    value: "shuttle",
    label: "shuttle",
  },
  {
    value: "rental car",
    label: "rental car",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "18ch",
    },
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

export function QuickQuote() {
  const classes = useStyles();
  const [transportation, setTransportation] = React.useState("Transportation");
  const [date, setDate] = React.useState(Date());

  const handleChange = (event) => {
    setTransportation(event.target.value);
  };

  return (
    <div className="quick-quote-container">
      <ThemeProvider theme={theme}>
        <form className={classes.root} noValidate autoComplete="off">
          <div className="client-information">
            <TextField
              color="secondary"
              id="outlined-textarea"
              label="First Name"
              placeholder="First Name"
              multiline
              variant="outlined"
            />
            <TextField
              color="secondary"
              id="outlined-textarea"
              label="Last Name"
              placeholder="Last Name"
              multiline
              variant="outlined"
            />
            <TextField
              color="secondary"
              id="outlined-textarea"
              label="Email"
              placeholder="Email"
              multiline
              variant="outlined"
            />
            <TextField
              color="secondary"
              id="outlined-textarea"
              label="Phone Number"
              placeholder="Phone Number"
              multiline
              variant="outlined"
            />
          </div>
          <div className="travel-information">
            <TextField
              color="secondary"
              id="outlined-textarea"
              label="Departure Location"
              placeholder="Enter Airport"
              multiline
              variant="outlined"
            />
            <TextField
              color="secondary"
              id="outlined-textarea"
              label="Desination Location"
              placeholder="Enter Airport"
              multiline
              variant="outlined"
            />
            <TextField
              color="secondary"
              id="date"
              label="Departure Date"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              color="secondary"
              id="date"
              label="Return Date"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              color="secondary"
              id="outlined-textarea"
              label="Travelers"
              placeholder="Travelers"
              multiline
              variant="outlined"
            />
            <TextField
              color="secondary"
              id="outlined-select-currency-native"
              select
              label="Transportation"
              value={transportation}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              {transportations.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </div>
          <div className="create-a-quote-drawer">
            <CreateAQuote />
          </div>
        </form>
      </ThemeProvider>
    </div>
  );
}
