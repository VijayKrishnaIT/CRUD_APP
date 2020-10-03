"use strict";
exports.__esModule = true;
var mongodb = require("mongodb");
var express = require("express");
var allProducts = express.Router().get("/", function (req, res) {
    mongodb.MongoClient.connect("mongodb+srv://admin:admin@cluster0.xtwks.mongodb.net/crud-db?retryWrites=true&w=majority"), function (error, client) {
        var db = client.db("crud-db");
        db.collection("products").find().toArray(function (err, Array) {
            if (err)
                throw err;
            else {
                res.send(Array);
            }
        });
    };
});
exports["default"] = allProducts;
