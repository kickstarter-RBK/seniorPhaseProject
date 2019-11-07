const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
var port = 8000;
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
