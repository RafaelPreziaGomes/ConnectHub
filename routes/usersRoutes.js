// require express and body-parser
const express = require("express");

//  use express router

// require controllers

const userController = require("./../controllers/usersController");

const router = express.Router();

router
  .route("/users/:id")
  .get(userController.getUser)
  .delete(userController.deleteUser);

router
  .route("/users/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

module.exports = router;
