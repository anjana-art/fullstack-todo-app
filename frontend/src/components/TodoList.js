import React from 'react';
import axios from 'axios';
import './TodoList.css';
import checkedImage from './images/checked.png';
import unCheckedImage from './images/unchecked.png';

const cross = "\u00d7";

const TodoList = ( {todos,fetchTodos,setTodos  } ) => {
   const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      fetchTodos(); // Refresh the todo list
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleToggleComplete = async (id, completed) => {
    try {
      await axios.put(`http://localhost:6002/api/todos/${id}`, { completed: !completed });
      
      fetchTodos(); // Refresh the todo list
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <div className='container'>
     <div className='todoapp'>
      <ul id='list-container'>
        {todos.map((todo) => (
          <li key={todo._id}>
            <img src={todo.completed ? checkedImage : unCheckedImage} 
                  alt={todo.completed ? 'Checked': 'Unchecked'}
                  onClick={(()=> handleToggleComplete(todo._id,todo.completed) )}
              />  
            <span>
              {todo.title}
            </span>
            <button onClick={() => handleDelete(todo._id)} id='deletebutton'>{ cross } </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TodoList;