import * as mongodb from "mongodb";
import * as express from "express";

let addProduct = express.Router().post("/", (req, res) => {
    mongodb.MongoClient.connect("mongodb+srv://admin:admin@cluster0.xtwks.mongodb.net/crud-db?retryWrites=true&w=majority", (err, client) => {
        if (err) throw err;
        else {
            let db = client.db("crud-db");
            let record = {
                "p_id": req.body.p_id,
                "p_name": req.body.p_name,
                "p_qty": req.body.p_qty,
                "p_condition": req.body.p_condition,
                "p_demand": req.body.p_demand,
                "p_availability": req.body.p_availability,
                "p_category": req.body.p_category
            }
            db.collection("products").insertOne(record, (err, result) => {
                if (err) throw err;
                else {
                    res.send({ insert: "success" });
                }

            });
        }
    })

});

export default addProduct;