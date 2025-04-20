

import http from 'http';

const PORT = 3001;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain'); // or 'text/html' if you're sending HTML
  res.end('new text');
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));


