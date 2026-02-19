import http from "http";

//create a server

const port = 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write("Hello World, Welcome to NodeJS");
    res.end();
  })
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
