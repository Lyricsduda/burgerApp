// Declared variables
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Get route
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Post route
router.post("/api/burgers", function (req, res) {
  burger.create([
    "name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function (result) {

    res.json({ id: result.insertId });
  });
});

// Put route
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {

      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Delete route
router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {

      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Route export
module.exports = router;
