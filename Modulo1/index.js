const http = require("http");

http
  .createServer((req, res) => {
    console.log(req);
    return res.end("Hello Word!");
  })
  .listen(3000);
