const express = require("express");
const router = express.Router();


module.exports = (db) => {

  router.post('/', (req, res) => {
    const { lat, lng } = req.body;

    db.query(
      `INSERT INTO guesses (
        game_id, user_id, latitude, longitude, score
      ) VALUES (
        $1, $2, $3, $4, $5
      );`, [ 1, 1, String(lat), String(lng), 500 ]
    )
    .then(result => {
      console.log(result)
      res.send("Guess inserted correctly")
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })
  })

  return router;
};