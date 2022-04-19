const express = require("express");
const router = express.Router();
import { calculateDistance, calculateScore } from '../helpers/helpers'


module.exports = (db) => {

  router.post('/', (req, res) => {
    const { lat, lng } = req.body;

    let promiseA = db.query(
      `SELECT * FROM games;`
    )

    let promiseB = db.query(
      `INSERT INTO guesses (
        game_id, user_id, latitude, longitude, score
      ) VALUES (
        $1, $2, $3, $4, $5
      );`, [ 1, 1, String(lat), String(lng), 500 ]
    );
    
    Promise.all([promiseA, promiseB])
      .then(results => {
        console.log("Results:", results);
        const answer = results[0];
        const distance = calculateDistance(answer, req.body);
        const score = calculateScore(distance);
        res.send({distance, score});
      })
      .catch();

      // .then(result => {
      //   console.log(result);
      //   res.send("Guess inserted correctly");
      // })
      // .catch(err => {
      //   console.log("Error!", err);
      //   res.send(err);
      // });

  });

  return router;
};