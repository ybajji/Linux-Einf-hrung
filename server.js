const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

// Configure session middleware
app.use(
  session({
    secret: 'mySecretKey', // Change this to a secret key of your choice
    resave: false,
    saveUninitialized: true
  })
);

// Routes
app.get('/', (req, res) => {
   console.log("1",req.session.views);
  // Check if a session already exists
  if (req.session.views) {
   console.log("2",req.session.views);
   req.session.views++;
  } else {
    // Set initial session values
    req.session.views = 1;
  }
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Start the server
app.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
});