//express server
const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // posts quick quote form input
  // first posts client information to create a user and generate a client id
  // if that resolves it puts traveling information with corresponding client_id that was generated
  router.put("/quotes", async (req, res) => {
    const { firstName, lastName, email, phoneNumber } = req.body;
    const queryParams = [firstName, lastName, email, phoneNumber];
    const queryString = `
    INSERT INTO clients(first_name, last_name, email, phone_number) 
    VALUES($1, $2, $3, $4) 
    RETURNING id;`;

    db.query(queryString, queryParams)
      .then((data) => {
        const clientId = data.rows[0].id;
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

  // gets all pending quotes
  router.get("/pending", async (req, res) => {
    db.query(
      `
    SELECT quotes.*, clients.*
    FROM quotes
    INNER JOIN clients 
    ON clients.id = client_id
    WHERE quotes.is_converted = FALSE;
    `
    )
      .then((data) => {
        res.json(data.rows);
      })
      .catch((error) => {
        console.error(error.message);
      });
  });

  // updates pending quotes to completed quotes
  router.put("/quotescompleted/:id", async (req, res) => {
    const { selectedId } = req.body;
    const queryParams = [selectedId];
    const queryString = `
    UPDATE quotes
    SET is_converted = TRUE
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

  // gets all completed quotes
  router.get("/completed", async (req, res) => {
    db.query(
      `
    SELECT quotes.*, clients.*
    FROM quotes
    INNER JOIN clients 
    ON clients.id = client_id
    WHERE quotes.is_converted = TRUE;
    `
    )
      .then((data) => {
        res.json(data.rows);
      })
      .catch((error) => {
        console.error(error.message);
      });
  });

  return router;
};
