import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../styles/QuickQuote.scss";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { CreateAQuote } from "./CreateAQuote";
import axios from "axios";
import { Button } from "@material-ui/core";

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

// custom brand colours
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
  const [transportation, setTransportation] = useState("Transportation");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [departLocation, setDepartLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travelers, setTravelers] = useState("");

  const handleChange = (event) => {
    setTransportation(event.target.value);
  };

  const changeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const changeLastName = (event) => {
    setLastName(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const changeDepartLocation = (event) => {
    setDepartLocation(event.target.value);
  };

  const changeReturnLocation = (event) => {
    setReturnLocation(event.target.value);
  };

  const changeDepartDate = (event) => {
    setDepartDate(event.target.value);
  };

  const changeReturnDate = (event) => {
    setReturnDate(event.target.value);
  };

  const changeTravelers = (event) => {
    setTravelers(event.target.value);
  };

  // const validate = () => {
  //   if (firstName === "") {
  //     setError;
  //     ("Name cannot be blank");
  //   }
  // };

  function submitQuote(event) {
    event.preventDefault();
    axios
      .put("/api/quotes", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
      })
      .then((res) => {
        axios.put("/api/quotes", {
          departLocation: departLocation,
          returnLocation: returnLocation,
          departDate: departDate,
          returnDate: returnDate,
          travelers: travelers,
          clientId: res,
        });
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }

  return (
    <div className="quick-quote-container">
      <ThemeProvider theme={theme}>
        <form className={classes.root} noValidate autoComplete="off">
          <div className="client-information">
            <TextField
              color="secondary"
              id="outlined-textarea"
              label="First Name"
              onChange={changeFirstName}
              value={firstName}
              placeholder="First Name"
              multiline
              variant="outlined"
            />
            <TextField
              color="secondary"
              id="outlined-textarea"
              label="Last Name"
              onChange={changeLastName}
              value={lastName}
              placeholder="Last Name"
              multiline
              variant="outlined"
            />
            <TextField
              color="secondary"
              id="outlined-textarea"
              label="Email"
              onChange={changeEmail}
              value={email}
              placeholder="Email"
              multiline
              variant="outlined"
            />
            <TextField
              color="secondary"
              id="outlined-textarea"
              label="Phone Number"
              onChange={changePhoneNumber}
              value={phoneNumber}
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
              onChange={changeDepartLocation}
              value={departLocation}
              placeholder="Enter Airport"
              multiline
              variant="outlined"
            />
            <TextField
              color="secondary"
              id="outlined-textarea"
              label="Desination Location"
              onChange={changeReturnLocation}
              value={returnLocation}
              placeholder="Enter Airport"
              multiline
              variant="outlined"
            />
            <TextField
              color="secondary"
              id="date"
              label="Departure Date"
              onChange={changeDepartDate}
              value={departDate}
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
              onChange={changeReturnDate}
              value={returnDate}
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
              onChange={changeTravelers}
              value={travelers}
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
            <TextField
              color="secondary"
              id="outlined-textarea"
              label="Price"
              onChange={changeTravelers}
              value={travelers}
              placeholder="$"
              multiline
              variant="outlined"
              width="50%"
            />
          </div>
          <div className="pop-up-quote">
            <Button
              onSubmit={submitQuote}
              variant="contained"
              size="large"
              color="primary"
            >
              Submit the quote
            </Button>
          </div>
        </form>
      </ThemeProvider>
    </div>
  );
}
