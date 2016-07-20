var mongoose = require('mongoose');
var express = require('express');
var Product = require('../models/productModel');

module.exports = {
  create: function(req, res) {
    var newProduct =  new Product(req.body);
    newProduct.save(function(err, result) {
      if(err) return res.status(500).send(err);
      else res.send(result)
    })
  },
  read: function(req, res) {
    Product.find(req.query)
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },
  update: function(req, res) {
    Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true},
      function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
      }
    );
  },
  delete: function(req, res) {
    Product.findByIdAndRemove(
      req.params.id,
      {new: true},
      function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
      }
    );
  }
}
