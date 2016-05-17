var express = require('express');
var app = express();
var io = require('socket.io');
var server = io.listen(app.listen(3000));
var path = require('path');

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

require('./io')(server);