const express = require('express')
const dotenv = require('dotenv')
const MongoClient = require("mongodb").MongoClient;
let cors = require('cors')
// const routesUrls = require('./routes/routes')
const routeBasic = require('./routes/routeBasic.js')

const app = express()
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

dotenv.config()

app.use(express.json())
app.use(cors())
app.use('/app', routeBasic)

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "КПП",
      version: '2021',
    },
  },
  apis: ["server.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
console.log(swaggerDocs)

 const mongoClient = new MongoClient("mongodb+srv://admin:admin@lab3.jb2ei.mongodb.net/lab3", { useUnifiedTopology: true });
 mongoClient.connect(function(err, client){
     if(err) return console.log(err);
     db = client;
     app.locals.collection = client.db("my-task-kpp").collection("my-task-kpp");
     app.listen(4000, function(){
         console.log("Сервер ожидает подключения...");
     });
 });