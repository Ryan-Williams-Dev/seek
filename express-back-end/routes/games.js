const express = require("express");
const { calculateDistance, generateDailyGameNum } = require("../helpers/helpers");
const router = express.Router();


module.exports = (db) => {

  router.get('/', (req, res) => {
    const userId = req.query.userId;
    const gameNum = generateDailyGameNum();

    db.query(`
      SELECT id, latitude, longitude
      FROM games 
      WHERE game_type_id = 1
      LIMIT $1;
    `, [gameNum])
      .then(answerData => {
        const answer = answerData.rows[gameNum - 1];
        const gameId = answer.id;
        const answerCoords = {
          latitude: answer.latitude,
          longitude: answer.longitude
        };

        db.query(`
            SELECT * FROM guesses WHERE user_id = $1 AND game_id = $2 LIMIT 1;
          `, [userId, gameId])
          .then(guessData => {
            const guess = guessData.rows[0];
            let distance = null;

            if (guess) {
              distance = calculateDistance(answerCoords, {
                lat: guess.latitude,
                lng: guess.longitude
              });
            }

            res.json({
              answerCoords,
              guess,
              distance,
              gameId
            });
          })
          .catch(err => {
            console.log("Error!", err);
            res.send(err);
          });
      });
  });

  // Play custom game route.
  router.get('/:id', (req, res) => {
    // console.log("req.params:", req.params);
    const gameID = req.params.id;
    return db.query(
      `SELECT latitude, longitude FROM games
      WHERE game_type_id = 2 AND id = $1;`, [gameID]
    )
      .then(data => {
        console.log("Sending custom game data...");
        res.send(data.rows[0]);
      })
      .catch(err => {
        console.log("get/:id", err);
      });
  });

  router.post('/', (req, res) => {
    const { lat, lng } = req.body;
    db.query(`
      INSERT INTO games (
        game_type_id, latitude, longitude
      ) VALUES (
        $1, $2, $3 
      );`, [2, lat, lng]
    )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log("Error! Database query failed:", err);
        res.send(err);
      });
  });

  return router;
};