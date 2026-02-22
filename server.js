//create a server
 
import http from "http";

// Step 1: for environment variables
import dotenv from "dotenv";
// Step 2: configure the environment variables
dotenv.config();
// Step 3: access the environment variable
const port = process.env.PORT || 3000 ;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write("Hello World, Welcome to NodeJS");
    res.end();
  })
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
