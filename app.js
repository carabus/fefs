const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/teapot', (req, res) => {
  res.setHeader('X-My-Header', 42);
  res.status(418);
  res.send('Teapot');
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
