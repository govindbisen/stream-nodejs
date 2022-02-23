const express = require("express");
const app = express();
const firstjs = require("./js1");
const secondjs = require("./js2");

app.get("/", function (req, res) {
  console.log(`${firstjs.course}, ${secondjs.course}`);
  res.send("hello");
});

app.listen(3000);
