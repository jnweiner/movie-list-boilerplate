const mysql2 = require('mysql2');
const Sequelize = require('sequelize');

const db = new Sequelize('movies', 'student', 'student', {
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

var Movie = db.define('Movie', {
  watched: Sequelize.INTEGER,
  title: Sequelize.STRING,
  year: Sequelize.INTEGER,
  runtime: Sequelize.INTEGER,
  poster: Sequelize.STRING,
  rating: Sequelize.DECIMAL
});

db.authenticate()
  .then(() => console.log('successful connection with sequelize'))
  .catch(err => console.log(err));

module.exports = Movie;
