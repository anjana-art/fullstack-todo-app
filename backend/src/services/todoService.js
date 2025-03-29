const mongoose = require("mongoose");
const Todo = require("../models/Todo");
const todoId = mongoose.Schema.Types.ObjectId;

const CONNECTION_URI = process.env.mongodbURI || "mongodb+srv://bhattaanjana0:anjana123@anjana.zcmelmw.mongodb.net/"

const getAllTodos = async()=>{
    try{
        await mongoose.connect(CONNECTION_URI);

        return await Todo.find();
    }catch (error) {
        console.error(error);
      } finally {
        await mongoose.connection.close();
      }
}

const createTodo = async({title})=>{
  try{
      await mongoose.connect(CONNECTION_URI);
      console.log("Creating todo with title:", title); // Add this line to check if title is passed correctly
      const todo = new Todo({title});
      await todo.save();
      return todo;
  }catch (error) {
      console.error(error);
    } finally {
      await mongoose.connection.close();
    }
}

const deleteTodoById = async(  id  )=>{
  try{
    await mongoose.connect(CONNECTION_URI);
    console.log("deleting todo by id", id);
    const deleteTodo = await   Todo.findByIdAndDelete(id);
    return deleteTodo;

  }catch (error) {
    console.error(error);
  } finally {
    await mongoose.connection.close();
  }
}

const updateCompleted    = async( id, completed )=>{ 
  try{ 
    await mongoose.connect(CONNECTION_URI);
    const toggleStatus = await Todo.findByIdAndUpdate( id,{ completed }, { new: true } );
    return toggleStatus;
   }catch (error) {
    console.error(error);
  } finally {
    await mongoose.connection.close();
  }
 }

module.exports = {getAllTodos, createTodo, deleteTodoById ,updateCompleted};