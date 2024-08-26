
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const STATIC_DIR = process.env.STATIC_DIR || 'client';

// Serve static files from the specified directory
app.use(express.static(path.join(__dirname, STATIC_DIR)));

// Define a simple route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, STATIC_DIR, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(Server running at ${process.env.DOMAIN});
});
