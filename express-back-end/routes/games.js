const express = require("express");
const { calculateDistance, generateDailyGameId } = require("../helpers/helpers");
const router = express.Router();


module.exports = (db) => {

  router.get('/', (req, res) => {
    const userId = req.query.userId
    const gameId = generateDailyGameId();

    Promise.all([
      db.query(`
        SELECT latitude, longitude FROM games WHERE id = $1;
      `, [gameId]),
      db.query(`
        SELECT * FROM guesses WHERE user_id = $1 AND game_id = $2 LIMIT 1;
      `, [userId, gameId])
    ])
      .then(all => {
        const [ answerCoordsData, guessData ] = all;
        const answerCoords = answerCoordsData.rows[0];
        const guess = guessData.rows[0]

        let distance = null
        if (guess) {
          distance = calculateDistance(answerCoords, {
            lat: guess.latitude,
            lng: guess.longitude
          })
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

  router.post('/', (req, res) => {
    const { lat, lng } = req.body;
    console.log("Arrived at router. Making DB query...");
    db.query(`
      INSERT INTO games (
        game_type_id, latitude, longitude
      ) VALUES (
        $1, $2, $3 
      );`, [2, lat, lng]
    )
      .then(data => {
        console.log("Game location successfully inserted into database.");
        res.send(data);
      })
      .catch(err => {
        console.log("Error! Database query failed:", err);
        res.send(err);
      });
  });

  return router;
};