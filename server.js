// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// In-memory data store for demonstration
let bookings = [];

// API endpoint to search tickets
app.post('/search', (req, res) => {
    const { from, to, date, travelClass, concessions } = req.body;

    // Mock search logic
    const results = [
        { trainNumber: '12345', trainName: 'Express Train', availability: 'Available' },
        { trainNumber: '54321', trainName: 'Superfast Train', availability: 'Waitlist' }
    ];

    res.json({ success: true, data: results });
});

// API endpoint to book a ticket
app.post('/book', (req, res) => {
    const { from, to, date, travelClass, concessions } = req.body;
    const bookingId = bookings.length + 1;
    bookings.push({ id: bookingId, from, to, date, travelClass, concessions });

    res.json({ success: true, message: 'Ticket booked successfully', bookingId });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
