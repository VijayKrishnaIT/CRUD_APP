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
