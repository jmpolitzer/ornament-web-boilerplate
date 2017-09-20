const express = require('express')
const app = express()

app.get('/awesome', (req, res) => {
  console.log('SERVER REQUEST: awesome');
  res.json({response: 'yes, you are awesome'});
});

app.listen(3001, () => {
  console.log('Listening on port 3001!');
});
