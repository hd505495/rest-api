const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Get all users
router.get('/', (req, res) => {
  User.find({}).then((users) => {
    res.send(users);
  });
});

// Get one user by id
router.get('/:id', (req, res) => {
  User.findById({_id: req.params.id}).then((user) => {
    res.send(user);
  });
});

// Create one user
router.post('/', (req, res, next) => {
  // call mongoose create method on User model (saves user instance to db)
  // and return saved object to client
  User.create(req.body).then((user) => {
    res.send(user);
  }).catch(next);
});

// Update one user by id
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
    User.findOne({_id: req.params.id}).then((user) => {
      res.send(user);
    });
  });
});

// Delete one user by id
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove({_id: req.params.id}).then((user) => {
    res.send(user);
  });
});

module.exports = router;
