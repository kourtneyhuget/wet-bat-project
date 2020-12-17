import React, { useEffect, useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

//TEST THIS OUT
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

//not pure function, need to style on first render
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: "15px",
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

export function CreateAQuote() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changePrice = (event) => {
    setPrice(event.target.value);
  };

  // function submitPrice(event) {
  //   event.preventDefault();
  //   axios.put("/api/price", {
  //     price: price,
  //   });
  //   .catch((error) => {
  //     console.error('Error: ', error)
  //   })
  // }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Please enter cost of the package</h2>
      <FormControl
        fullWidth
        className={classes.margin}
        variant="outlined"
        color="primary"
      >
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={price}
          onChange={changePrice}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={60}
        />
      </FormControl>
      <Button
        onClick={handleClose}
        variant="contained"
        size="large"
        color="primary"
      >
        Submit the quote
      </Button>
    </div>
  );
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        size="large"
        color="primary"
      >
        Create a quote
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
