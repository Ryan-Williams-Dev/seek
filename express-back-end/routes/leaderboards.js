const express = require('express');
const router = express.Router();

module.exports = (db) => {

  /*
  need username of all followed accounts, score for daily game
  */

  router.get('/:userId/:gameId', (req, res) => {
    console.log(req.params);
    const userId = req.params.userId;
    const gameId = req.params.gameId;
    db.query(`SELECT DISTINCT users.username, guesses.score
    FROM users
    JOIN guesses
    ON users.id = guesses.user_id
    WHERE users.id IN (
      SELECT followed_id FROM follows WHERE user_id = $1
    ) AND guesses.game_id = $2
    ORDER BY guesses.score DESC;
    `, [ userId, gameId ])
      .then(r => {
        res.send(r.rows);
      })
      .catch(err => {
        console.log(err);
        res.send(err);
      });
  });

  return router;
};