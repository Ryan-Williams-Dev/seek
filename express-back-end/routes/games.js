const express = require("express");
const router = express.Router();


module.exports = (db) => {

  router.get('/', (req, res) => {
    db.query(`
      SELECT latitude, longitude FROM games WHERE id = 1;
    `)
      .then(data => {
        const coords = data.rows[0];
        res.json(coords);
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