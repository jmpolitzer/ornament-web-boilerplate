import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/../client/build')));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
