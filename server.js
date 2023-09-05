const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser'); // For parsing JSON request bodies

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Provide your MySQL password
  database: 'movie_booking_db', // Your database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as ID ' + db.threadId);
});

// Define a route for fetching available movies
app.get('/api/movies', (req, res) => {
  const query = 'SELECT * FROM movies';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching movies: ' + error.message);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

// Define a route for making a movie booking
app.post('/api/bookings', (req, res) => {
  const { movieId, seats } = req.body;

  // Validate the input and perform the booking logic
  // Update the database with the booking details

  // Send a success or error response
  res.json({ message: 'Booking successful' });
});
function bookSeats(movieId, seats) {
  $.ajax({
    url: '/api/bookings', // Your backend API endpoint
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ movieId, seats }), // Data to send in the request body
    success: function (response) {
      // Handle a successful booking
      alert('Booking successful!');
    },
    error: function (error) {
      // Handle errors
      console.error('Error booking seats:', error);
      alert('Error booking seats. Please try again later.');
    },
  });
}

// Define a route for user authentication (e.g., login)
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Validate the user's credentials and generate a token

  // Send the token as a response
  res.json({ token: 'your-auth-token' });
});
// Import the database connection
const connection = require('./db'); // Update the path as needed

// Example API endpoint to fetch data from the database
app.get('/api/movies', (req, res) => {
  const sql = 'SELECT * FROM movies';

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    return res.status(200).json(results);
  });
});

// Define other routes for user registration, ticket cancellation, etc.

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
