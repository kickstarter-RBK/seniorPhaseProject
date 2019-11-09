const express = require("express");
var bodyParser = require("body-parser");
const app = express();
var port = 3001;

app.use(bodyParser.json());

app.use(express.static(__dirname + "/client/dist"));

// app.get("/", function(req, res) {
//   res.send("Hello World1");
// });

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
