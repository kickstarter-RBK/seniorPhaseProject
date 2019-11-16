const express = require("./node_modules/express");
const bodyParser = require("body-parser");
const app = express();
const Item = require("./db.js").Item;

app.use(express.static(__dirname + "/client/dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var port = process.env.PORT || 3001;

// app.get("/item", function(req, res) {
//   res.send("server");
// });

app.get("/items", (req, res) => {
  console.log("hele");
  Item.find({}).then(items => {
    res.json(items);
  });
});
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
