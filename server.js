
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const chokidar = require('chokidar');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const PORT = 3000;

// Serve the files from the 'public' directory
const publicDirectoryPath = path.join(__dirname, '/');
app.use(express.static(publicDirectoryPath));

// Broadcast to all clients when a file changes
chokidar.watch(publicDirectoryPath).on('change', (event, path) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send('reload');
    }
  });
});

// When a connection is established
wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
