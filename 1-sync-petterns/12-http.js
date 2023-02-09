const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("i want to go to hokkaido");
  }

  if (req.url === "/about") {
    res.end("tokyo is good too");
  }
  res.end(
    `<h1>oops</h1>
    <p>nothing</p>
    <a href="/">back home</a>
    `
  );
});

server.listen(1000);
