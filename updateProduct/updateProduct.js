"use strict";
exports.__esModule = true;
var mongodb = require("mongodb");
var express = require("express");
var updateProduct = express.Router().put("/", function (req, res) {
    mongodb.MongoClient.connect("mongodb+srv://admin:admin@cluster0.xtwks.mongodb.net/crud-db?retryWrites=true&w=majority", function (err, client) {
        if (err)
            throw err;
        else {
            var db = client.db("crud-db");
            db.collection("employees").updateOne({
                "p_id": req.body.p_id
            }, { $set: { "p_name": req.body.p_name } }, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ update: "success" });
                }
            });
        }
    });
});
exports["default"] = updateProduct;
