"use strict";
//Install express server
let express = require('express');
let path = require('path');

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

let app = express();

// Serve only the static files form the dist directory
app.use(express.static('/dist/starstruck'));


app.get('/*', function(req,res) {
  res.sendFile(path.join('/dist/starstruck/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
