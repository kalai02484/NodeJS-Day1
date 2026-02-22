//create a server

//for env
// Step 1: configure the environment variables
// Step 2: access the environment variable

//for express
// Step 1: import the express module
// Step 2: create an instance of express
// Step 3: define routes and middleware
// Step 4: start the server

import http from "http";
import dotenv from "dotenv";
import express from "express";

// Create an instance of express
const app = express();
// Define a middleware to parse JSON request bodies
app.use(express.json());

dotenv.config();
const port = process.env.PORT || 3000 ;
/*
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write("Hello World, Welcome to NodeJS");
    res.end();
  })
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
*/

app.get("/", (req, res)=>{
  res.status(200).send("<h1 style='color: blue;'>Hello World, Welcome to NodeJS</h1>");
});

app.listen(port, () => {
  console.log("Server is running");
});