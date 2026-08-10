const express = require('express'); 
const logger = require('./middleware/logger'); 
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 8080;

// Middleware to parse JSON request body
app.use(express.json());

// Logger middleware for all requests
app.use(logger);

// User Routes
app.use("/", userRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('User API is running.')
})


// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
