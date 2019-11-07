const express = require("express");
const app = express();
var port = 3001;
app.get("/", function(req, res) {
  res.send("Hello World1");
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
