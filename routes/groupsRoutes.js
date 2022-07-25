// require express and body-parser
const { group } = require("console");
const express = require("express");

//  use express router

// require controllers

const groupsController = require("./../controllers/groupsController");

// set up router

const router = express.Router();

// routes

router
  .route("/groups/:id")
  .get(groupsController.getGroup)
  .delete(groupsController.deleteGroup);

router
  .route("/groups/")
  .get(groupsController.getAllGroups)
  .post(groupsController.createGroup);

module.exports = router;
