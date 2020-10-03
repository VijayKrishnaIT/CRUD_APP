import * as mongodb from "mongodb";
import * as express from "express";

let updateProduct = express.Router().put("/", (req, res) => {
    mongodb.MongoClient.connect("mongodb+srv://admin:admin@cluster0.xtwks.mongodb.net/crud-db?retryWrites=true&w=majority", (err, client) => {
        if (err)
            throw err;
        else {
            let db = client.db("crud-db");
            db.collection("employees").updateOne({
                "p_id": req.body.p_id
            }, { $set: { "p_name": req.body.p_name } }, (err, result) => {
                if (err)
                    throw err;
                else {
                    res.send({ update: "success" });
                }
            });
        }

    })
})

export default updateProduct;