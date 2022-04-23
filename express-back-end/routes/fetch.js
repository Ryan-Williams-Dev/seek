const express = require('express');
const router = express.Router();

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

  return router;
};