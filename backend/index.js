const express = require('express');
const cors = require('cors');

let temperatures = []

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

// Create an endpoint for getting the temperatures
app.get('/temperature', (req, res) => {
  res.json(temperatures)
});

// Create an endpoint for adding a new temperature
app.post('/temperature', (req, res) => {
  const body = req.body
  
  if (!body.temperature) {
    return res.status(400).json({
      error: 'temperature missing'
    })
  }

  const now = Date.now()
  const nowdate = new Date(now)
  const datetime = nowdate.toLocaleString("fi-FI")

  const newTemp = { 
    temperature: body.temperature, 
    timestamp: datetime 
  }
  console.log('newTemp', newTemp);
  temperatures = temperatures.concat(newTemp)

  res.json(newTemp)
})

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
