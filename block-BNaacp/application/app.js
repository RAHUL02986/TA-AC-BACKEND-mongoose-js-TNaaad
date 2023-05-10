var express = require('express');
var user = require('./model/user');
var mongoose = require('mongoose');

var app = express();
app.use(express.json());

mongoose
  .connect('mongodb://127.0.0.1:27017/application', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('db Connected'))
  .catch((err) => {
    console.error(err);
  });

app.post('/users', (req, res) => {
  console.log(req.body);
  user
    .create(req.body)
    .then((user) => res.json(user))
    .catch((err) => {
      console.error(err);
    });
});

app.get('/users/:id', (req, res) => {
  console.log(req.body);
  var id = req.params.id;
  user
    .find({})
    .then((user) => res.json(user))
    .catch((err) => {
      console.error(err);
    });
});
app.get('/usersid', (req, res) => {
  console.log(req.body);
  var id = req.params.id;
  user
    .find({ _id: '645b57c9cde91bbd10d18383' })
    .then((user) => res.json(user))
    .catch((err) => {
      console.error(err);
    });
});

app.put('/users/:id', (req, res) => {
  console.log(req.body);
  var id = req.params.id;

  user
    .findByIdAndUpdate(id, req.body, { new: true })
    .then((updatedUser) => res.json(updatedUser))
    .catch((err) => {
      console.error(err);
    });
});

app.delete('/users/:id', (req, res) => {
    console.log(req.body);
  user
    .findByIdAndDelete(req.params.id)
    .then((deleteUser) => res.send(`${deleteUser.id}was deleted`));
});

app.listen(4000, () => {
  console.log('app listen on port 4k');
});
