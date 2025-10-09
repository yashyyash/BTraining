// chat-server.js
require('dotenv').config();
const express = require('express');
const http = require('http');
const path = require('path');
const WebSocket = require('ws');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname, 'public'))); // serve static files from ./public

// If you place index.html in project root instead of /public, adjust accordingly.
// We'll just serve index.html from root for simplicity (below).
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const server = http.createServer(app);

// Attach WebSocket server to the same HTTP server
const wss = new WebSocket.Server({ server });

// Map to keep track of clients: ws -> { username, id }
const clients = new Map();

// Utility to broadcast to all connected clients
function broadcast(data, exceptWs = null) {
  const raw = JSON.stringify(data);
  for (const [ws] of clients) {
    if (ws.readyState === WebSocket.OPEN && ws !== exceptWs) {
      ws.send(raw);
    }
  }
}

// Send updated user list to everyone
function broadcastUserList() {
  const users = Array.from(clients.values()).map(c => ({ username: c.username, id: c.id }));
  broadcast({ type: 'users', users });
}

let nextId = 1;

wss.on('connection', (ws) => {
  // assign temp id until user logs in
  const assignedId = nextId++;
  clients.set(ws, { username: null, id: assignedId });

  // send a welcome message with your assigned id
  ws.send(JSON.stringify({ type: 'welcome', id: assignedId }));

  ws.on('message', (message) => {
    // Expect messages as JSON strings
    let data;
    try {
      data = JSON.parse(message);
    } catch (err) {
      console.warn('Received non-JSON message:', message);
      return;
    }

    // Handle message types
    if (data.type === 'login') {
      // data: { type: 'login', username: 'yash' }
      const username = String(data.username || '').trim().slice(0, 32) || `User${assignedId}`;
      clients.set(ws, { username, id: assignedId });

      // Notify the new user of successful login
      ws.send(JSON.stringify({ type: 'loggedin', username, id: assignedId }));

      // broadcast user joined
      broadcast({ type: 'system', text: `${username} joined the chat.` }, ws);
      broadcastUserList();

    } else if (data.type === 'message') {
      // data: { type: 'message', text: 'hello' }
      const client = clients.get(ws) || {};
      const username = client.username || `User${assignedId}`;
      const msgObj = {
        type: 'message',
        from: username,
        text: String(data.text || ''),
        ts: Date.now()
      };
      // Broadcast message to everyone
      broadcast(msgObj);

    } else {
      // Unknown message type - ignore or log
      console.log('Unknown message type:', data.type);
    }
  });

  ws.on('close', () => {
    const client = clients.get(ws);
    if (client && client.username) {
      broadcast({ type: 'system', text: `${client.username} left the chat.` });
    }
    clients.delete(ws);
    broadcastUserList();
  });

  ws.on('error', (err) => {
    console.error('WS error', err);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
