const express = require("express");
const { calculateDistance, calculateScore } = require("../helpers/helpers");
const router = express.Router();

module.exports = (db) => {

  router.post('/', (req, res) => {
    const { lat, lng } = req.body;
    
    let promiseA = db.query(
      `SELECT latitude, longitude FROM games WHERE id = 1;`
    );

    let promiseB = db.query(
      `INSERT INTO guesses (
        game_id, user_id, latitude, longitude, score
      ) VALUES (
        $1, $2, $3, $4, $5
      );`, [ 1, 1, lat, lng, 500 ]
    );
    
    Promise.all([promiseA, promiseB])
      .then((results) => {
        const answer = results[0].rows[0];
        const distance = calculateDistance(answer, req.body);
        const score = calculateScore(distance);
        res.send({distance, score, answer});
      })
      .catch(err => {
        console.log("Error:", err);
        res.send(err);
      });

  });

  return router;
};