const express = require('express');
const app = express();
const cors=require("cors");

// Random stock value generator function
function generateRandomStockValue(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}
app.use(cors());
// SSE endpoint
app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const stockSymbol = 'MSFT';
  const minPrice = 130.00;
  const maxPrice = 180.00;

  // Send an initial event
  res.write(`data: Server Started\n\n`);

  // Send updates every second
  const intervalId = setInterval(() => {
    const stockValue = generateRandomStockValue(minPrice, maxPrice);
    res.write(`data: ${stockSymbol} stock value: $${stockValue}\n\n`);
  }, 1000);

  // When the connection is closed, clear the interval
  req.on('close', () => {
    clearInterval(intervalId);
  });
});

// Serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const port = 3003;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
