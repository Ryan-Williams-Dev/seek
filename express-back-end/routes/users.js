const express = require('express');
const router = express.Router();

module.exports = (db) => {

  // retrieve data for specific user for Account page
  router.get('/:id', (req, res) => {
    const userID = req.params.id;
    return db.query(
      `SELECT first_name, last_name, email, avatar_url, followed_id AS following, SUM(score) AS total_score FROM users
      JOIN follows ON users.id = user_id
      JOIN guesses ON users.id = guesses.user_id
      WHERE users.id = $1
      GROUP BY first_name, last_name, email, avatar_url, followed_id;`, [userID])
      .then((data) => {
        console.log("Sending user data...");
        res.send(data.rows);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  });

  router.post('/', (req, res) => {
    const { email, password } = req.body;
    return db.query("SELECT * FROM users WHERE email = $1;", [email])
      .then((data) => {
        const user = data.rows[0];
        if (password !== user.password_digest) {
          return res.send({valid: false});
        }
        return res.send({valid: true, user});
      })
      .catch((err) => {
        console.log(err);
        if (err) return res.send({valid: false, error: err});
      });
  });

  return router;
};