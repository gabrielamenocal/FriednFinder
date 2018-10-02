var express = require("express");
var bodyParser = require("body-parser");
var htmlRoutes = require ("./routing/htmlRoutes");
var apiRoutes = require ("./routing/apiRoutes");

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(htmlRoutes);
app.use(apiRoutes);







app.listen(port);