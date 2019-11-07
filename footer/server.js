const express = require("express");
const app = express();
var port = 3003;
app.get("/", function(req, res) {
  res.send("Hello World3");
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
