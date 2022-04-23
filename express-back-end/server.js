require("dotenv").config({silent: true});

const cors = require('cors')
const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

// DB setup
const { Pool } = require("pg")
const dbParams = require("./lib/db.js")
const db = new Pool(dbParams);
db.connect();

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use(cors());


// Routes
const userRoutes = require('./routes/users')
const guessRoutes = require('./routes/guess')
const gameRoutes = require('./routes/games')
const fetchUserRoute = require('./routes/fetch')

App.use('/users', userRoutes(db)); 
App.use('/api/guess', guessRoutes(db));
App.use('/api/games', gameRoutes(db));
App.use('/api/fetch', fetchUserRoute(db));


// Server Start
App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
