import http from "http";
import dotenv from "dotenv";
import express from "express";
import { format } from "date-fns";
import fs from "fs";

//create a server

//for env
// Step 1: configure the environment variables
// Step 2: access the environment variable

//for express
// Step 1: import the express module
// Step 2: create an instance of express
// Step 3: define routes and middleware
// Step 4: start the server


// Create an instance of express
const app = express();
// Define a middleware to parse JSON request bodies
app.use(express.json());

dotenv.config();
const port = process.env.PORT || 3000;
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

app.get("/", (req, res) => {
  res
    .status(200)
    .send("<h1 style='color: blue;'>Hello World, Welcome to NodeJS</h1>");
});

app.get("/file", (req, res)=>{
  let today = format(new Date(), "dd-MM-yyyy-hh-mm-ss");
  //console.log(today);
  const filepath = `TimeStamps/${today}`;
  fs.writeFileSync(filepath, `${today}`, "utf-8");

  let data = fs.readFileSync(filepath, "utf-8");
  try {
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Error reading the file");
  }
});

app.listen(port, () => {
  console.log("Server is running");
});
