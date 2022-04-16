require("dotenv").config({silent: true});

const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

// DB setup
const { Pool } = require("pg")
const dbParams = require("./lib/db.js")
const db = new Pool(dbParams);
db.connect();
// Test Query
db.query('SELECT * FROM users LIMIT 1;')
  .then((res) =>  {
    arr = Object.values(res.rows)
    console.log("Database succesfully connected, here's a user as proof...: ", arr)
  })
  .catch(err => console.log("Unable to connect to the database. Error: " + err));

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
