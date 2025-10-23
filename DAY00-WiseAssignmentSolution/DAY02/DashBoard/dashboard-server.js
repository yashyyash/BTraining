const express = require('express');
const WebSocket = require('ws');

const app = express();
const port = 3000;

app.use(express.static('./')); // serve current folder

// Create WebSocket server
const wss = new WebSocket.Server({ noServer: true });

// When a client connects
wss.on('connection', (ws) => {
  console.log('A client connected');

  // Send 5 random numbers every 2 seconds
  const interval = setInterval(() => {
    const numbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1);
    ws.send(JSON.stringify(numbers));
  }, 2000);

  // Clear interval on disconnect
  ws.on('close', () => {
    clearInterval(interval);
    console.log('Client disconnected');
  });
});

// Handle HTTP upgrade to WebSocket
const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});
