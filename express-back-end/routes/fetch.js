const express = require('express');
const router = express.Router();

const { generateDailyGameNum } =  require('../helpers/helpers')

module.exports = (db) => {

  router.get('/', (req, res) => {
    return db.query("SELECT * FROM users WHERE id = $1", [req.query.id])
      .then(data => {
        return res.send(data.rows[0])
      })
      .catch(err => {
        console.log(err)
        return res.send(err)
      })
  });

  router.get('/dailyGameId', (req, res) => {
    const gameNum = generateDailyGameNum();
    return db.query(`
      SELECT id, latitude, longitude
      FROM games 
      WHERE game_type_id = 1
      LIMIT $1;
    `, [gameNum])
    .then(answerData => {
      const answer = answerData.rows[gameNum - 1];
      const gameId = answer.id;
      res.send({gameId})
    })
    .catch(err => {
      res.send(err)
    })
  });

  return router;
};