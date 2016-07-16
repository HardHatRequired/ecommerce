var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var port = 8080;

// app
var app = express();
var productCtrl = require('./api/controllers/productCtrl.js');

// database
var mongoose = require('mongoose');
var mongoUri = "mongodb://localhost:27017:productListings";
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log("connection is successful");
});

// middleware
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(cors());

// api
app.get('/api/products', productCtrl.read);
app.post('/api/products', productCtrl.create);
app.put('/api/products/:id', productCtrl.update);
app.delete('/api/products/:id', productCtrl.delete);

// error handling

app.listen(port, function() {
  console.log("listening on port", port);
});
