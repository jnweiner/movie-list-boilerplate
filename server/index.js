const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/movies', (req, res) => {
  res.send('list of movies here');
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});