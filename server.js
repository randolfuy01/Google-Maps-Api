
var port = 8080;
var path = require('path');
var express = require('express');
var app = express();
const fs = require('fs');

var StaticDirectory = path.join(__dirname, 'public');

app.use(express.static(StaticDirectory));
// Set up a route for the home page



app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
});

