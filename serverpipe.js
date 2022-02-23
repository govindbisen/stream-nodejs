const fs = require("fs");
var server = require("http");
var server = server.createServer();

server.on("request", (req, res) => {
  const src = fs.createReadStream("./big.file");
  src.pipe(res);
});

server.listen(8000);
