const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Get all users
router.get('/', (req, res) => {
  res.send({
    Method: req.method
  });
});

// Get one user by id
router.get('/:id', (req, res) => {
  res.send({
    Method: req.method,
    id: req.params.id
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
  res.send({
    Method: req.method,
    id: req.params.id
  });
});

// Delete one user by id
router.delete('/:id', (req, res) => {
  res.send({
    Method: req.method,
    id: req.params.id
  });
});

module.exports = router;