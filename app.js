const express = require('express');
const app = express();
const AppError = require('./app-error');


app.get('/admin', (req, res) => {
  throw new AppError('Only admins can access this page', 403);
});

app.get('/cat', (req, res) => {
  cat.eat();
});

app.use((err, req, res, next) => {
  const {
    message = 'Something went wrong',
    status = 500,
  } = err;

  res.status(status).send(message);
  next(err);
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
