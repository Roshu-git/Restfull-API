// Validates required fields for creating/updating users

const validateUser = (req, res, next) => {
  const { firstName, lastName, hobby } = req.body;

  // Check required fields
  if (!firstName || !lastName || !hobby) {
    return res.status(400).json({
      message: 'firstName, lastName and hobby are required'
    });
  }

  next(); //validation passed
};


module.exports = validateUser;