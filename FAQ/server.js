const express = require("./node_modules/express");
const bodyParser = require("body-parser");
const Item = require("./db.js").Item;

const app = express();
var port = 3002;

app.use(express.static(__dirname + "/client/dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Config data base

app.get("/items", (req, res) => {
  Item.find({})
    .sort({ date: -1 })
    .then(items => {
      res.json(items);
    });
});

app.post("/items", (req, res) => {
  const newItem = Item({ name: req.body.name });
  newItem.save().then(item => res.json(item));
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
