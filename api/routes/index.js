//express server
const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // router.get("/", (req, res) => {
  //   res.status(200).send("Hello World!");
  //   console.log("here");
  //   res.json({ Hello: "there" });
  // });

  router.get("/test", (req, res) => {
    db.query("SELECT * FROM clients;").then((data) => {
      console.log("SENDING DATA BACK TO FRONT END", data);
      res.json(data.rows[0]);
    });
  });

  router.put("/quotes", async (req, res) => {
    const { first_name, last_name, email, phone_number } = req.body;
    console.log("Is this coming through?");
    try {
      const newQuote = await db.query(
        "INSERT INTO clients(first_name, last_name, email, phone_number) VALUES($1, $2, $3) RETURNING id;",
        [first_name, last_name, email, phone_number]
      );
      res.json({data.rows[0]});
    } catch (err) {
      console.error(err.message);
    }
  });

  return router;
};
