const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get('/', (req, res) => {
    
  });

  router.post('/', (req, res) => {
    const { email, password } = req.body;
    return db.query("SELECT * FROM users WHERE email = $1;", [email])
      .then((data) => {
        user = data.rows[0];
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