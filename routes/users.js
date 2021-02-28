const express = require('express');
const router = express.Router();

// Get all users
router.get('/', (req, res) => {
  res.send('Get all');
});

// Get one user by id
router.get('/:id', (req, res) => {
  res.send(`Get by id: ${req.params.id}`);
});

// Create one user
router.post('/', (req, res) => {
  res.send('Create a user');
});

// Update one user by id
router.put('/:id', (req, res) => {
  res.send(`Updating user with id: ${req.params.id}`);
});

// Delete one user by id
router.delete('/:id', (req, res) => {
  res.send(`Deleting user with id: ${req.params.id}`);
});

module.exports = router;