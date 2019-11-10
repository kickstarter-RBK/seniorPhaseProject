const express = require("express");
const app = express();
var port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const Item = require("../models/db.js").Item;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/client/dist"));
// app.get("/", function(req, res) {
//   res.send("Hello World");
// });

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
