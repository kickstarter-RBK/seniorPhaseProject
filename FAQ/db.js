const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Item = mongoose.model("item", ItemSchema);

const URI =
  "mongodb+srv://yasmeenothman:123456789rbk@cluster0-9v7hj.mongodb.net/kickstarter?retryWrites=true&w=majority";

mongoose.connect(URI, { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("we're connected!");
});

var y = Item({ name: "yas" });
y.save();

module.exports.Item = Item;
