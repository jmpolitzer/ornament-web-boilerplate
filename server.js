import compression from 'compression';
import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;

app.use(compression);
app.use(express.static(path.join(__dirname, 'client/build')));

let count = 0;

app.get('/increment', (req, res) => {
  console.log('SERVER REQUEST: increment');

  count++;

  res.json({ count: count });
});

app.get('/decrement', (req, res) => {
  console.log('SERVER REQUEST: decrement');

  count--;

  res.json({ count: count });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
