const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var port = 8000;





app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded());



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
//
