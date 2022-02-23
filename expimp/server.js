const express = require("express");

const app = express();

const errLog = (err, req, res, next) => {
  console.error(err.stack);
  res.send("Something broke!");
};

app.get("/home/:firstName/:lastName", (req, res) => {
  res.send(req.query);
  res.send(req.params);
});
app.use(errLog);

console.log("Server Started at port 3000!");
app.listen(3000);
