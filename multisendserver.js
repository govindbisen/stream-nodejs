const express = require("express");
const app = express();

const call1 = function (request, response, next) {
  console.log("Calling 1");
  next();
};
const call2 = function (request, response, next) {
  console.log("Calling 2");
  next();
};
const call3 = function (request, response, next) {
  console.log("Calling 3");
  response.end();
};
const call4 = function (request, response, next) {
  console.log("Calling 4");
  response.end();
};
app.all("/login", [call2, call4, call1, call3]);

app.listen(3000);
