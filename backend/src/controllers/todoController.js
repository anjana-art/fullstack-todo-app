const Todo = require("../models/Todo");

exports.getAllTodos = async(req, res) => {
    try{
        const todos = await Todo.find();
      return res.status(200).json(todos);

    }catch(err){
      return  res.status(500).json({error: err.message});
    }
}

exports.testServer = async(req, res)=>{
     try{
        return  res.send('Server is running!');


     }catch(err){
        return  res.status(500).json({error: err.message});
      }
}

exports.createTodo = async(req, res) =>{
    try{
        const todo = new Todo(req.body);
        await todo.save();
      return  res.status(201).json(todo);
    }catch(err){
     return   res.status(400).json({error:err.message});
    }
};

exports.updateTodo = async (req, res)=>{
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(todo);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

exports.deleteTodo = async (req, res)=>{
    try{
        await Todo.findByIdAndDelete(req.params.id);
        res.status(204).send();
    }catch(err){
        res.status(400).json({error: err.message});
    }
};