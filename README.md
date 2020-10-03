1. create database MongoDB Atlas.

mongodb+srv://admin:admin@cluster0.xtwks.mongodb.net/crud-db?retryWrites=true&w=majority

2. create server directory(folder)

products_server

3. switch to server directory

4. download the node modules
   yarn add express @types/express cors @types/cors body-parser @types/body-parser mongodb @types/mongodb --save

5. develop rest apis by using Node JS

---

products_server
products
all products.ts
addProduct
addProduct.ts
updateProduct  
 updateProduct.ts
deleteProduct
deleteProduct.ts
server.js

---

allProducts.ts file used to create GET Request. (Fetch the records from products collection)

addProduct.ts used to add new product to products collection which is available in crud-db.(creating the POST Request)

updateProduct.ts file used to update the product available in products collection(PUT Request).

deleteProduct.ts file used to delete particular product from products collection(DELETE Request)

server.ts file used to collaborate the above modules.

---

1.  make the MongoDB Ready for CRUD Operations (CLOUD MongoDB (MongoDB Atlas))

    => mongodb+srv://welcome123:welcome123@mern.ns1f1.mongodb.net/merndb?retryWrites=true&w=majority

2.  create the directory

    Ex.

         server

3.  switch to server directory

    > cd server

4.  download node modules

    => express

    => mongodb

    => cors

    => body-parser

    - express module used to develop rest apis.

    - mongodb module used to connect to database.

    - cors module used to enable ports communication.

    - body-parser module used to read the client data.

    > yarn add express mongodb cors body-parser --save

5.  develop rest apis by using NodeJS

---

server
fetch
fetch.ts

    insert
        insert.ts

    update
        update.ts

    delete
        delete.ts

    server.ts

---

6. start the node server

   > node server
