//express server
const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // router.get("/test", (req, res) => {
  //   db.query("SELECT * FROM clients;").then((data) => {
  //     console.log("SENDING DATA BACK TO FRONT END", data);
  //     res.json(data.rows[0]);
  //   });
  // });

  router.put("/quotes", async (req, res) => {
    console.log("IN BACK END QUOTES");
    const { firstName, lastName, email, phoneNumber } = req.body;
    const queryParams = [firstName, lastName, email, phoneNumber];
    const queryString = `
    INSERT INTO clients(first_name, last_name, email, phone_number) 
    VALUES($1, $2, $3, $4) 
    RETURNING id;`;

    db.query(queryString, queryParams)
      .then((data) => {
        const clientId = data.rows[0].id;
        // console.log("res", res);
        // console.log("HERE IT IS", res.rows[0].id);
        const {
          departLocation,
          returnLocation,
          departDate,
          returnDate,
          travelers,
          transportation,
          price,
        } = req.body;
        const queryParams = [
          clientId,
          departLocation,
          returnLocation,
          departDate,
          returnDate,
          travelers,
          transportation,
          price,
        ];
        const queryString = `
          INSERT INTO quotes(client_id, departure_location, destination_location, depart_date, return_date, people, transportation, price)
          VALUES($1, $2, $3, $4, $5, $6, $7, $8)
          RETURNING *;`;
        db.query(queryString, queryParams).then(() => {
          res.sendStatus(200);
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/pending", async (req, res) => {
    db.query(
      `
    SELECT quotes.*, clients.*
    FROM quotes
    INNER JOIN clients 
    ON clients.id = client_id
    WHERE quotes.is_converted = FALSE
    `
    )
      .then((data) => {
        console.log("THIS IS DATA", data);
        res.json(data.rows);
      })
      .catch((error) => {
        console.error(error.message);
      });
  });

  router.put("/quotescompleted/:id", async (req, res) => {
    const { selectedId } = req.body;
    const queryParams = [selectedId];
    const queryString = `
    UPDATE quotes
    SET is_converted = true
    WHERE client_id = $1
    RETURNING *;
    `;
    db.query(queryString, queryParams)
      .then((data) => {
        res.json(data.rows);
      })
      .catch((error) => {
        console.error(error.message);
      });
  });
  return router;
};
