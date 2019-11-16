const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const Item = require("./db.js").Item;
var port = process.env.PORT || 8000;

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/items", (req, res) => {
  Item.find({}).then(items => {
    res.json(items);
  });
});
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
