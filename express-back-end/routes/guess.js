const express = require("express");
const router = express.Router();

module.exports = (db) => {

  router.post('/', (req, res) => {
    console.log("success, this is what I received: ", req.body);
    res.send({message: "Hello from the backend"});
  })

  return router;
};