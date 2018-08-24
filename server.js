const path = require('path');
const express = require('express');
const port = process.env.PORT || 8081;
const app = express();

process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD + '/build'));

app.get('*', function (req, res) {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});

app.listen(port);
