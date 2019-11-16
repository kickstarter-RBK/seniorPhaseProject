const express = require("./node_modules/express");
const bodyParser = require("./node_modules/body-parser");
const app = express();

app.use(express.static(__dirname + "/client/dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var port = process.env.PORT || 3002;


app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
