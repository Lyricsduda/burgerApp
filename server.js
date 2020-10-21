// Declared variables
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Static content from the public catagory
app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import burgersController
var routes = require("./controllers/burgersController.js");

app.use(routes);

// Server start
app.listen(PORT, function () {
  // Console log to show the server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
