import * as mongodb from "mongodb";
import * as express from "express";

let deleteProduct = express.Router().delete("/", (req, res) => {
    mongodb.MongoClient.connect("mongodb+srv://admin:admin@cluster0.xtwks.mongodb.net/crud-db?retryWrites=true&w=majority", (err, client) => {
        if (err) throw err;
        else {
            let db = client.db("crud-db");
            db.collection("products").deleteOne({ "p_id": req.body.p_id }, (err, result) => {
                if (err) throw err;
                else {
                    res.send({ delete: "success" });
                }
            })
        }
    })
});

export default deleteProduct;