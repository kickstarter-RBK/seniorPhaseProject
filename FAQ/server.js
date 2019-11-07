const express = require("./node_modules/express");
const app = express();
var port = 3002;
app.get("/", function(req, res) {
  res.send("Hello World2");
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
