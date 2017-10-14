import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import http from 'http';
import jwt from 'jsonwebtoken';

const app = express();
const port = parseInt(process.env.PORT, 10) || 8080;

app.set('port', port);

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jwt.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', (err, decode) => {
      if(err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
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
