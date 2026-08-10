const express = require('express');
const users = require('../data/users');
const validateUser = require('../middleware/validateuser');

const router = express.Router();

// GET /users
router.get('/users', (req, res) => {
  res.status(200).json(users);
});

// GET /users/:id
router.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json(user);
});

// POST /user
router.post('/user', validateUser, (req, res) => {
  const newUser = {
    id: String(users.length + 1),
    ...req.body
  };

  users.push(newUser);

  res.status(201).json({
    message: 'User added successfully',
    user: newUser
  });
});

// PUT /user/:id
router.put('/user/:id', validateUser, (req, res) => {
  const user = users.find(u => u.id === req.params.id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.hobby = req.body.hobby;

  res.status(200).json({
    message: 'User updated successfully',
    user
  });
});

// DELETE /user/:id
router.delete('/user/:id', (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users.splice(index, 1);

  res.status(200).json({
    message: 'User deleted successfully'
  });
});

module.exports = router;