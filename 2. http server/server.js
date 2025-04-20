import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 8002; // Fallback to 8002 if env variable is undefined

const server = http.createServer((req, res) => {
  try {
    if (req.method === 'GET') {
      let filepath = path.join(__dirname, 'public', 'index.html'); // default

      if (req.url === '/about') {
        filepath = path.join(__dirname, 'public', 'about.html');
      } else if (req.url === '/contact') {
        filepath = path.join(__dirname, 'public', 'contact.html');
      }

      fs.readFile(filepath, (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>Error: Page not found</h1>');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    }
  } catch (error) {
    console.error("Server Error:", error);
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end('<h1>Internal Server Error</h1>');
  }
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
