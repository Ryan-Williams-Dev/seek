const express = require("express");
const { calculateDistance, calculateScore } = require("../helpers/helpers");
const router = express.Router();

module.exports = (db) => {

  router.post('/', (req, res) => {
    const { lat, lng, gameId, user } = req.body;

    db.query(
      `SELECT latitude, longitude FROM games WHERE id = $1;`
    , [gameId])
    .then((results) => {
      const answer = results.rows[0];
      const distance = calculateDistance(answer, req.body);
      const score = calculateScore(distance);
      db.query(
      `INSERT INTO guesses (
        game_id, user_id, latitude, longitude, score
      ) VALUES (
        $1, $2, $3, $4, $5
      );`, [ gameId, user.id, lat, lng, score ]
    )
    .then(result => {
      res.send({distance, score, answer});
    })
    })
    .catch(err => {
      console.log("Error:", err);
      res.send(err);
    })
  });

  return router;
};