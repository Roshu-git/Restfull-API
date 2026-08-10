const express = require('express'); 
const {logger }= require('./middleware/logger'); 
const validateUser = require('./middleware/validateuser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 8080;

// Middleware to parse JSON
app.use(express.json());

app.use(logger);
app.use(validateUser);
app.use("/", userRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('User API is running.')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
