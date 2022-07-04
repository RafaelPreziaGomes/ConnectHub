//  requirements

// file system build in module to read and write information to the data
const fs = require("fs");
// url build in module to route the user
const url = require("url");
// http module to create the server
const http = require("http");
//  path module in order to designate path
const path = require("path");
// create a server

const server = http.createServer(function (req, res) {
  //  creates the joined path to the html file
  var dirPath = path.join(__dirname, "templates/index.html");
  // gets the url parsed from the query search bar
  var mypath = url.parse(req.url);
  console.log(mypath.pathname);
  //   checks to see the parsed url
  //   if (mypath.pathname == "/") {
  // reads file from a specific location
  const htmlFile = fs.readFile(dirPath, (err, data) => {
    if (err) throw err;
    // specifies that the content is html
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    //  responds with the html file
    res.end(data);
  });
  //   }
});

server.listen((port = 3000), () => {
  console.log(`Server running at http://localhost:${port}/`);
});
