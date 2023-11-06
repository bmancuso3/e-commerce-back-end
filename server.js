const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});



//! NOTES
//? new project in heroku w new db
//? connect everything (dotenv, config, jawsdb w new info)
// focus on models and relationships
// focus on routes and db interaction
// look at mini project for route examples

//* start w model associations, then one set of routes, test in insomnia, next set of routes, test, etc

// turn in will require a video showing functionality in insomnia - vid link, repo link
// will  just be a bunch of insomnia routes showing required queries