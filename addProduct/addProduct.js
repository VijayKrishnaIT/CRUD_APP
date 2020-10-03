"use strict";
exports.__esModule = true;
var mongodb = require("mongodb");
var express = require("express");
var addProduct = express.Router().post("/", function (req, res) {
    mongodb.MongoClient.connect("mongodb+srv://admin:admin@cluster0.xtwks.mongodb.net/crud-db?retryWrites=true&w=majority", function (err, client) {
        if (err)
            throw err;
        else {
            var db = client.db("crud-db");
            var record = {
                "p_id": req.body.p_id,
                "p_name": req.body.p_name,
                "p_qty": req.body.p_qty,
                "p_condition": req.body.p_condition,
                "p_demand": req.body.p_demand,
                "p_availability": req.body.p_availability,
                "p_category": req.body.p_category
            };
            db.collection("products").insertOne(record, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ insert: "success" });
                }
            });
        }
    });
});
exports["default"] = addProduct;
