const express = require("./node_modules/express");
const bodyParser = require("./node_modules/body-parser");
const app = express();
const Item = require("../models/db.js").Item;
app.use(express.static(__dirname + "/client/dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var port = process.env.PORT || 3002;
app.get("/", function(req, res) {
  res.send("server");
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
