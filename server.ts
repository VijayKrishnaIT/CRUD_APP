import * as express from "express";
import * as bodyparser from "body-parser";
import * as cors from "cors";
import allProducts from "./allProducts/allProducts";
import addProduct from "./addProduct/addProduct";
import updateProduct from "./updateProduct/updateProduct";
import deleteProduct from "./deleteProduct/deleteProduct";

let app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/fetch", allProducts);
app.use("/insert", addProduct);
app.use("/update", updateProduct);
app.use("/delete", deleteProduct);

let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("server started")
})