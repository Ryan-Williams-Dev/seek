const express = require("express");
const router = express.Router();


module.exports = (db) => {

  router.get('/', (req, res) => {
    db.query(`
      SELECT latitude, longitude FROM games WHERE id = 1;
    `)
      .then(data => {
        coords = data.rows[0]
        res.json(coords);
      })
      .catch(err => {
        console.log("Error!", err)
        res.send(err)
      });
  });

  return router;
};