import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import http from 'http';

const app = express();
const port = parseInt(process.env.PORT, 10) || 8080;

app.set('port', port);

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

let count = 0;

app.get('/increment', (req, res) => {
  count++;

  res.json({ count: count });
});

app.get('/decrement', (req, res) => {
  count--;

  res.json({ count: count });
});

require('./server/routes')(app);

app.get("*", (req, res) => {
  /*
    TODO: Add 404 page.
    res.sendFile(path.join(__dirname, 'client/build', '404.html'));
  */
  res.status(200).send({
    message: 'Hmpf. It does\'t look like there\'s anything here.'
  })
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
