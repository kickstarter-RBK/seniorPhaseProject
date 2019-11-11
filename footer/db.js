const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const URI = require("../config/keys.js").URI;

const URI = "mongodb+srv://maysqunaibi:123456789rbk@cluster0-gtcao.mongodb.net/kickstarter?retryWrites=true&w=majority";



const ItemSchema = Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Item = mongoose.model("item", ItemSchema);

mongoose.connect(URI, { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("We are connected");
});

const x = Item({
  name: "donia asa'ad sa'eed"
});
x.save();

module.exports.Item = Item;
