"use strict";
//Install express server
let express = require('express');
let path = require('path');

let app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/starstruck@0.0.0'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/starstruck@0.0.0/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
