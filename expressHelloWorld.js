// import the top-level function of express
const express = require('express');

// Creates an Express application using the top-level function
const app = express();

// Routes HTTP GET requests to the specified path "/" with the specified callback function
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// make the app listen on port 3000
app.listen(1337);
