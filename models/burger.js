// Declared variables
var orm = require("../config/orm.js");

var Burger = {
  all: function (cb) {
    orm.all("Burgers", function (res) {
      cb(res);
    });
  },

  create: function (cols, vals, cb) {
    orm.create("Burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("Burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("Burgers", condition, function (res) {
      cb(res);
    });
  }
};

// Module export
module.exports = Burger;
