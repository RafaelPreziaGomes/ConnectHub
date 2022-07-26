//  requirements

// file system build in module to read and write information to the data
// require express

const express = require("express");

// setup express app

const app = express();
const fs = require("fs");
// url build in module to route the user
const url = require("url");
// http module to create the server
const http = require("http");
//  path module in order to designate path
const path = require("path");
// create a server

// require all routes
const groupsRoute = require("./routes/groupsRoutes");
const userRoute = require("./routes/usersRoutes");
// gets all initial files on views folder

//  user views engine
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});

// sets up json parser
app.use(express.json());

// route api routes to /api/
app.use("/api/", userRoute);
app.use("/api/", groupsRoute);

module.exports = app;
