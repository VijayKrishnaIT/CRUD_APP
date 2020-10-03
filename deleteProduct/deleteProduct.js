"use strict";
exports.__esModule = true;
var mongodb = require("mongodb");
var express = require("express");
var deleteProduct = express.Router()["delete"]("/", function (req, res) {
    mongodb.MongoClient.connect("mongodb+srv://admin:admin@cluster0.xtwks.mongodb.net/crud-db?retryWrites=true&w=majority", function (err, client) {
        if (err)
            throw err;
        else {
            var db = client.db("crud-db");
            db.collection("products").deleteOne({ "p_id": req.body.p_id }, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ "delete": "success" });
                }
            });
        }
    });
});
exports["default"] = deleteProduct;
