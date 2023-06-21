const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://0.0.0.0/mestodb', {
  useNewUrlParser: true,
}).then(() => {
  console.log('connected to db');
});

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use((req, res, next) => {
  req.user = {
    _id: '64922f6cbe46994ad87bf35d',
  };

  next();
});

app.use('/users', require('./routes/users'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
