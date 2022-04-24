const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.post('/', (req, res) => {
    const { userId, followUsername } = req.body
    let followedId = null;
    db.query('SELECT id FROM users WHERE username = $1;', [followUsername])
    .then(r => {
      if (r.rows.length <= 0) { 
        return res.send({message: 'No user with that username'});
      }
      followedId = r.rows[0].id
      db.query('SELECT count(*) FROM follows WHERE user_id = $1 AND followed_id = $2;', [userId, followedId])
      .then(r => {
        console.log(r)
        if(r.rows[0].count >= 1) {
          return res.send({message: 'Already following this user'})
        }
        db.query(`INSERT INTO follows (user_id, followed_id) VALUES ($1, $2);`, [userId, followedId] )
        .then(r => {
          res.send({message: "Success"})
        })
      })
    })
    .catch(err => {
      console.log(err)
      res.send({err})
    })
  })

  return router;
}