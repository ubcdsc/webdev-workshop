const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(config.basePath, routes);

module.exports = http.createServer(app);

var server = app.listen(8080, function() {
    console.log('Ready on port %d', server.address().port);
});