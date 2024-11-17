const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS middleware

const app = express();

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173', // Allow specific origin (frontend)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
  credentials: true, // Allow cookies or auth headers
}));

// Middleware
app.use(bodyParser.json());

// Security Headers
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'unsafe-none'); // Update for compatibility during development
  next();
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Import routes
const campaignRoutes = require('./routes/campaignRoutes');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');
const segmentRoutes = require('./routes/segmentRoutes');
const communicationLogRoutes = require('./routes/communicationLogRoutes');
const authRoutes = require('./routes/authRoutes');

// Use routes
app.use('/api/campaign', campaignRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/segment', segmentRoutes);
app.use('/api/communication_log', communicationLogRoutes);
app.use('/api/auth', authRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Export the app instance
module.exports = app;
