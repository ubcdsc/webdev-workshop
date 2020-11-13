const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use('/', routes);

var server = app.listen(3003, function() {
  console.log('Server running on port %d', server.address().port);
});
