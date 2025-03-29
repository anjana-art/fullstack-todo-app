const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/todoRoutes.js');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

//const mongoURI = "mongodb+srv://bhattaanjana0:anjana123@anjana.zcmelmw.mongodb.net/"

dotenv.config();
const mongoURI = process.env.MONGO_URI || "mongodb://mongo:27017/todo-app"
//const mongodbURI = "mongodb+srv://bhattaanjana0:anjana123@anjana.zcmelmw.mongodb.net/"



const app = express();

//middleware
//app.use(cors({ origin: 'http://localhost:3000' })); //for local dev
app.use(cors({
      origin: 'http://localhost:3001' 
    }));
app.use(express.json());
//app.use(bodyParser.json());

//routes
app.use('/', router);


//mongodb connection
//mongoose.connect("mongodb://mongo:27017/todo-app")
// mongoose.connect("mongodb+srv://bhattaanjana0:anjana123@anjana.zcmelmw.mongodb.net/")
mongoose.connect("mongodb://mongo:27017/todo-app")
       .then(()=> console.log('Connected to MongoDB.'))
       .catch((err) => console.error('MongoDB connection error:',err));

module.exports = app;


