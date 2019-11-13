const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var port = process.env.PORT || 3003;



app.use(express.static(__dirname + "/client/dist"));
app.use(express.urlencoded());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
