const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, '../client')));

// News API Configuration
const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';
const NEWS_API_KEY = '052a13a87505438a8cc1e768c1f06c24';

// API Route to Fetch News
app.get('/api/news', async (req, res) => {
  try {
    const response = await axios.get(NEWS_API_URL, {
      params: {
        country: 'us',
        apiKey: NEWS_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).send('Server Error');
  }
});

// Serve Front-End
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
