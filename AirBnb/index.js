const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;

// MongoDB connection
mongoose.connect('mongodb+srv://omakinde951:bif7wMLSFFByaovU@cluster0.oydfuxu.mongodb.net/AirbnbManagement');
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middleware
app.use(express.json());
app.use(cors());
// API routes
app.use('/api', require('./api'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
