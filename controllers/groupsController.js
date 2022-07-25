// require express and fs
const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// use body parser to get the data from the client
app.use(bodyParser.urlencoded({ extended: true }));

// read the data form db.json file and store in a variable called groups
var groups = JSON.parse(
  fs.readFileSync(path.join(__dirname, "/../db/db.json"))
);

//  create an array to store the groups
var groupHolder = [];

exports.saveGroups = () => {
  // turn the notes array into a string
  const groupsJSON = JSON.stringify(groups);
  // write the notes to the db.json file
  fs.writeFileSync("db/db.json", groupsJSON);
};

//  send all group
exports.getAllGroups = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      groups,
    },
  });
};

exports.getGroup = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  var group = groups.find((el) => el.id === id);

  res.status(200).json({
    status: "success",
    data: {
      group,
    },
  });
};

// creates a group
exports.createGroup = (req, res) => {
  // gets the group from the input field
  const groupMessage = req.body.message;
  // adds the group to the database

  // add the group to the groups array
  //  if groups is not empty than add the group to the end of the array
  if (groups.length > 0) {
    groupHolder.push(groups);
  }

  groupHolder.push(group);

  console.log(groupHolder);

  // transform the last item from the groups array to a json format
  var group = {
    id: groups.length + 1,
    message: groupMessage,
  };
  // add the group to the database
  groups.push(group);

  // write the new group to the database
  fs.writeFileSync(
    path.join(__dirname, "/../db/db.json"),
    JSON.stringify(groups)
  );

  res.status(200).json({
    status: "success",
    data: {
      group,
    },
  });
};

// deletes a group
exports.deleteGroup = (req, res) => {
  const id = req.params.id * 1;

  var group = groups.find((el) => el.id === id);

  if (group) {
    // remove the note from the notes array
    groups = groups.filter((group) => group.id !== id);
    // log the note to the console
    console.log(`Deleted note ${group}`);
    // send a response to the client
    // delete the note from the db.json file
    exports.saveGroups();
    res.json(group);
  } else {
    // if the note is not found
    // send a 404 response to the client
    res.status(404).end();
  }
};
