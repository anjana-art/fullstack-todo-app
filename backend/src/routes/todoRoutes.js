const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
//const todoController = require("../controllers/todoController.js");
const {getAllTodos, createTodo, deleteTodoById,updateCompleted} = require("../services/todoService.js");
const todoId = mongoose.Types.ObjectId;

 router.get('/api/todos', async(req, res)=>{
    try{
        const todos = await getAllTodos();
        console.log("getting all products", todos);
        res.json(todos);
        
    }catch (error) {
        console.error(error);
        res.status(500).send({
          status: "failure",
          data: error,
        });
      }
}) 

router.post('/api/todos', async(req, res)=>{
  try{
      const {title} = req.body;
      console.log("Received title:", title); // Add this line to check if title is received

      const newTodo = await createTodo({title});
      console.log("create new todo", newTodo);
      res.json(newTodo);
      
  }catch (error) {
      console.error(error);
      res.status(500).send({
        status: "failure",
        data: error,
      });
    }
}) 

router.delete('/api/todos/:id' , async(req, res)=>{
  try{
    const id= req.params.id;

    const deleteTodo = await deleteTodoById( id );
    console.log("deleted todo by id ", deleteTodo);
    res.json(deleteTodo);

  }catch (error) {
      console.error(error);
      res.status(400).send({
        status: "failure",
        data: error,
      });
    }
})

router.put('/api/todos/:id', async(req,res)=>{ 
  try {
    console.log(`Updating todo with id: ${req.params.id}, completed: ${req.body.completed}`);
    const todo = await updateCompleted(
      req.params.id, req.body.completed 
    );
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  })

module.exports = router;