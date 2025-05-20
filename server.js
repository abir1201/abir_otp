const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;
const SMSMAN_API_KEY = '_NdYvaKcXXHw1s1Nfd7cib4OnWhmLZoO'; // Replace with your SMS-Man API key

app.use(cors());
app.use(express.json());

// Get available number / buy activation
app.get('/api/get-number', async (req, res) => {
  try {
    const response = await axios.get("https://api.sms-man.com/v1/user/buy/activation/1", {
      headers: {
        'Authorization': Bearer +{SMSMAN_API_KEY}
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Check SMS for activation
app.get('/api/get-sms/:activationId', async (req, res) => {
  try {
    const activationId = req.params.activationId;
   const response = await axios.get(
  https://api.sms-man.com/v1/user/check/${activationId},
  {
    headers: {
      Authorization: Bearer ${SMSMAN_API_KEY}
    }
  }
);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Simple test route
app.get('/', (req, res) => {
  res.send('SMS-Man OTP Reseller Panel Backend is running');
});

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});