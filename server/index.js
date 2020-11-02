const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000 || process.env.PORT;

const Movie = require('../database');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/movies', (req, res) => {
  Movie.sync()
    .then(() => {
      return Movie.findAll();
    })
    .then(results => {
      results.forEach(result => {
        if (result.watched === 0) {
          result.watched = false;
        } else {
          result.watched = true;
        }
        result.rating = Number(result.rating);
      });
      res.send(results);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.post('/movies', (req, res) => {
  const movie = req.body;
  console.log(movie);
  Movie.sync()
    .then(() => {
      return Movie.create(movie);
    })
    .then(result => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});