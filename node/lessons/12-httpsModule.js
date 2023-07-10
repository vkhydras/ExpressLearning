const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.end('Welcome to our homepage');
  } else if (req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.end('Here is our short history');
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>404 Not Found</title>
        </head>
        <body>
          <h1>Oops!</h1>
          <p>We can't find the page you are looking for.</p>
          <a href="/">Back Home</a>
        </body>
      </html>
    `);
  }
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
