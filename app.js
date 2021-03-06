//imports
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const todoController = require('./controllers/todoController');
const PORT = process.env.PORT || 3000;
var cors = require("cors");


//routes api
app.use(express.json());

app.use(cors());

app.get('/',function(req,res){
  res.status(200).json({message: 'Welcome to Hubert\'s todo api'})
});

app.get('/todos', todoController.getAllTodo);

app.post('/todos', todoController.addTodo);

app.patch('/todos/:id', todoController.updateTodoById);

app.delete('/todos/:id',todoController.deleteTodoById);

app.get('/todos/:id', todoController.getTodoById);

//listener
app.listen(PORT, function () {
  console.log('Server has started to run');
  mongoose.connect(process.env.DB_URL)
  .then(function(){
    console.log('DB is connected')
  })
  .catch(function(error){
    console.log('DB is not connected :',error.message);
  })

})


/**npm i cors express
In index.js or server.js -
const express = require("express");

const app = express();
var cors = require("cors");
app.use(cors()); */



//SQL- types two; relaional(strict wih rows n columns n others) and non-relational(flexible n fast) database
//tables are ur collections

//SQL                       NoSQL
//DataBases                 Databases
//Tables                    Collection
//Rows(record)              Documents(record)

//mongoDB localStorage        mongoDB atlas  cloudstorage