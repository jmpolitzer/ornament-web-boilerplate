const express = require('express')
const app = express()
let count = 0

app.get('/increment', (req, res) => {
  console.log('SERVER REQUEST: increment');

  count++

  res.json({ count: count });
});

app.get('/decrement', (req, res) => {
  console.log('SERVER REQUEST: decrement');

  count--

  res.json({ count: count });
});

app.listen(3001, () => {
  console.log('Listening on port 3001!');
});
