// Server for MVC Tech Blog

// Dependencies
// set path
const path = require('path');
// set Express.js
const express = require('express');
// Set routes , by getting it from controllers folder
const routes = require('./controllers/');
// Set Sequelize
const sequelize = require('./config/connection');
// use dotenv to hide configuration information
require('dotenv').config();
// Express session to handle session cookies

// Initialize the server
const app = express();
// Set the port location
const PORT = process.env.PORT || 3001;

// strintify data by Express parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Tell the app to use Express Session for the session handling
app.use(session(sess));

// set server to go through the routes
app.use(routes);

// listen to the server also link sequelize
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });