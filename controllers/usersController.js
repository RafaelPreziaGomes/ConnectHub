// require express and fs
const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// use body parser to get the data from the client
app.use(bodyParser.urlencoded({ extended: true }));

var users = JSON.parse(
  fs.readFileSync(path.join(__dirname, "/../db/users.json"))
);

// create a function that adds the user id based upon the user index on the database
exports.addUserId = (user) => {
  user.id = users.length + 1;
};

//  add a array to store the users username and password

const username = [];
const password = [];

//   gets the user info from the database
exports.getUser = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  var user = users.find((el) => el.id === id);

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

// gets all user from the database
exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      users,
    },
  });
};

exports.createUser = (req, res) => {
  // gets the username and password in a json format from the create form
  // adds the username and password to the database

  const nameUser = req.body.username;
  const passwordUser = req.body.password;

  // add username and password to the username and password array
  username.push(nameUser);
  password.push(passwordUser);

  // transform the last item from the username and password array to a json format
  var user = {
    id: users.length + 1,
    username: username[username.length - 1],
    password: password[password.length - 1],
  };

  // add the user to the database
  users.push(user);

  // write the new user to the database
  fs.writeFileSync(
    path.join(__dirname, "/../db/users.json"),
    JSON.stringify(users)
  );

  fs.writeFile(`${__dirname}/db/users.json`, user, (err) => {
    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  });
};

exports.saveUsers = () => {
  // turn the notes array into a string
  const usersJSON = JSON.stringify(users);
  // write the notes to the db.json file
  fs.writeFileSync("db/users.json", usersJSON);
};

// delete to delete user

exports.deleteUser = (req, res) => {
  const id = req.params.id * 1;

  var user = users.find((el) => el.id === id);

  if (user) {
    // remove the note from the notes array
    users = users.filter((user) => user.id !== id);
    // log the note to the console
    console.log(`Deleted note ${user}`);
    // send a response to the client
    // delete the note from the db.json file
    exports.saveUsers();
    res.json(user);
  } else {
    // if the note is not found
    // send a 404 response to the client
    res.status(404).end();
  }
};
