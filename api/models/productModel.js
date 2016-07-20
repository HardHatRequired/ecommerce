var mongoose = require('mongoose');
// var express = require('express');
var Schema = mongoose.Schema;

var ProductSchema = new Schema(
  {
    // productId: Number,
    name: {type: String, required: true, unique: true},
    price: {type: Number, required: true}
    // sport: {type: String, required: true},
    // desc: {type: String, required: true},
    // color: String,
    // size: String,
    // weight: String,
    // customizable: String,
    // thumbnail: {
    //   path: {type: String, required: true, unique: true},
    //   extension: {type: String, required: true}
    // }
  }
  // {
  //   timestamp: true
  // }
);

module.exports = mongoose.model('Product', ProductSchema);
