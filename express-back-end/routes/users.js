const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (db) => {

  router.get('/', (req, res) => {
    db.query(
      `SELECT first_name, last_name, username, COUNT(guesses.id) as games_played, SUM(score) as total_score
      FROM users
      JOIN guesses ON user_id = users.id
      GROUP BY users.id
      ORDER BY total_score DESC;`)
      .then(data => {
        // console.log("LEADERBOARD DATA DB QUERY DATA:", data);
        res.send(data);
      })
      .catch(err => {
        console.log("Error: users.js route, leaderboard query...", err);
      });
  });

  router.post('/new', (req, res) => {
    console.log(req.body);
    const { username, email, password, firstName, lastName, description } = req.body;

    bcrypt.hash(password, saltRounds, function(err, hash) {
      db.query(`
        INSERT INTO users ( username, email, password_digest, first_name, last_name, description )
        VALUES ( $1, $2, $3, $4, $5, $6 );
      `, [username, email, hash, firstName, lastName, description])
        .then(r => {
          res.send(r);
        })
        .catch(err => {
          console.log(err);
          res.send(err);
        });
    });
  });

  // retrieve data for specific user for Account page
  router.get('/:id', (req, res) => {
    const userId = req.params.id;

    Promise.all([
      db.query('SELECT SUM(score) AS total_score, Count(*) AS games_played FROM guesses WHERE user_id = $1', [ userId ]),
      db.query(`SELECT DISTINCT first_name, last_name
                FROM users 
                WHERE id IN (
                  SELECT followed_id FROM follows WHERE user_id = $1
                );
              `, [ userId ])
    ])
      .then((data) => {
        // console.log('data: ', data[0].rows);
        // console.log('follows: ', data[1].rows);
        res.send({
          totals: data[0].rows,
          follows: data[1].rows
        });
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
        const hash = data.rows[0].password_digest;

        bcrypt.compare(password, hash, function(err, result) {
          if (result) {
            return res.send({valid: true, user: {
              id: user.id,
              username: user.username,
              email: user.email,
              first_name: user.first_name,
              last_name: user.last_name,
              avatar_url: user.avatar_url,
              description: user.description
            }});
          }
          else {
            console.log("Invalid password!");
            return res.send({valid: false});
          }
        });

      })
      .catch((err) => {
        console.log(err);
        if (err) return res.send({valid: false, error: err});
      });
  });

  
  return router;
};