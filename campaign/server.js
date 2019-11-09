const express = require("./node_modules/express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static(__dirname + "/client/dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var port = 3001;
app.get("/", function(req, res) {
  res.send("server");
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
