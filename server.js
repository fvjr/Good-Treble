const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const { Sequelize } = require('sequelize/types');
// const routes = require('./controllers');
// const helpers = require('./utils/helpers');

// const sequelize = require('/config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
  console.log('hello!');
});

//once routes are set up
// Sequelize.afterSync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });
