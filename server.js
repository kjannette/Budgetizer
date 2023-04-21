var express = require('express');
var app = express();
var path = require('path');
const port = process.env.PORT || 8080;

app.use('/static', express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port);
