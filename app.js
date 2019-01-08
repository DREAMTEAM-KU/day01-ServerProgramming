var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes");

var app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Sample Code for RESTful API");
});

app.use("/", routes);

app.listen(8080, () => {
  console.log("server started at port 8080");
});

module.exports = app;
