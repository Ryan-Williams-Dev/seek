const express = require("express");
const { calculateDistance, generateDailyGameNum } = require("../helpers/helpers");
const router = express.Router();


module.exports = (db) => {

  router.post('/daily', (req, res) => {
    console.log('/daily', req.body)
    const { lat, lng } = req.body;

    if (lat <= -90 || lat >= 90 || lng <= -180 || lng >= 180) {
      return res.send("Inccorect Format")
    }

    return db.query(`
      INSERT INTO games (
        game_type_id, latitude, longitude
      ) VALUES (
        1, $1, $2
      );
    `, [lat, lng])
    .then(r => {
      console.log(r)
      res.send("Success!")
    })
    .catch(err => {
      res.send(err)
    })
  })

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
        if(answerData.rowCount < gameNum) {
          return res.send({message: `We handpick our daily challenge locations for the best game experience.\nIf you see this message, we ran out of locations and need to pick some more!\nPlease check back again soon for more challenges!`})
        }
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
      })
      .catch(err => {
        console.log(err)
        return res.status(500).send(err)
      });

  });

  // Play custom game route.
  router.get('/:id', (req, res) => {
    const gameID = req.params.id;
    return db.query(
      `SELECT latitude, longitude FROM games
      WHERE game_type_id = 2 AND id = $1;`, [gameID]
    )
      .then(answerData => {
        const answer = answerData.rows[0];
        // const gameId = answer.id;
        const answerCoords = {
          latitude: answer.latitude,
          longitude: answer.longitude
        };
        res.send(answerData.rows[0]);
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
      ) RETURNING id;`, [2, lat, lng]
    )
      .then(data => {
        res.send(data.rows[0]);
      })
      .catch(err => {
        console.log("Error! Database query failed:", err);
        res.send(err);
      });
  });

  return router;
};