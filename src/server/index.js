const express = require('express');
const api = require('./api');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use('/api', api.restRouter);
app.use(express.static('dist'));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', 'dist/index.html'));
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
