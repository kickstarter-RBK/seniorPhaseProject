const express = require("express");
const app = express();
var port = 3000;
app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
