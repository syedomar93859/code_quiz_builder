// import http package
const http = require('node:http');

const fs = require('node:fs');

// create a new server
const hostname = '127.0.0.1';
const port = 3000;

// the server is created using this method
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile("main.html", (err, data) => {
    if (err) {
        res.statusCode = 500
        res.end("Error loading page")
    }
    res.end(data)
});
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
