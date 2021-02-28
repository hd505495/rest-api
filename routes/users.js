const express = require('express');
const router = express.Router();

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
router.post('/', (req, res) => {
  //console.log(req.body);
  res.send({
    Method: req.method,
    name: req.body.name,
    username: req.body.username
  });
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