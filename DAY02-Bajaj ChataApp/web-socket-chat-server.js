// Import dependencies
const express = require('express');
const app = express();
const WebSocket = require('ws');

// Create WebSocket server (port 3001)
const wss = new WebSocket.Server({ port: 3001 });

// Broadcast a message to all connected clients
function broadcast(data) {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}

// ✅ Handle new WebSocket connections
wss.on('connection', ws => {
  console.log('Client connected');

  // Send a welcome message to the new client
  ws.send('Welcome to the WebSocket server!');

  // Listen for messages from clients
  ws.on('message', message => {
    console.log(`Received: ${message}`);
    // Broadcast to all clients
    broadcast(`Client says: ${message}`);
  });

  // Handle disconnections
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// ✅ Serve HTML file via Express (port 3003)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const port = 3003;
app.listen(port,"0.0.0.0", () => {
  console.log(`HTTP server running at http://localhost:${port}/`);
  console.log(`WebSocket server running at ws://localhost:3001`);
});
