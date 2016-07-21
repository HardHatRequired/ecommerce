var mongoose = require('mongoose');
// var express = require('express');
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true, validate: function(email) {
      return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    }},
    purchaseHistory: {type: String, required: true}
  },
  {
    timestamp: true
  }
);

module.exports = mongoose.model('User', UserSchema);
