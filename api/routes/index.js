// PRETEND INDEX IS USERS.JS
// API GET POSTS FOR USERS

//express server
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// router.listen(port, () => {
//   console.log(`App running on port ${port}.`);
// });

module.exports = router;
