import * as mongodb from "mongodb";
import * as express from "express";

let allProducts = express.Router().get("/", (req, res) => {
    mongodb.MongoClient.connect("mongodb+srv://admin:admin@cluster0.xtwks.mongodb.net/crud-db?retryWrites=true&w=majority"), (error, client) => {
        let db = client.db("crud-db");
        db.collection("products").find().toArray((err, Array) => {
            if (err) throw err;
            else {
                res.send(Array);
            }
        });
    }
});

export default allProducts;
