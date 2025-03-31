import React ,{useState, useEffect } from "react";
import TodoList from "./components/TodoList.js";
import TodoForm from "./components/TodoForm.js";
import './App.css';
import axios from "axios";

function App(){
    const [todos, setTodos] = useState([]);

  // Fetch todos from the backend
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:6002/api/todos');
      //const response = await fetch('http://backend:5000/api/todos');
   // const response = await axios.get('https://todolist-8a1u.onrender.com');

         setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // Fetch todos when the component mounts
  useEffect(() => {
    fetchTodos();
  }, []);


    return(
        <div className="App">
            <TodoForm fetchTodos={fetchTodos }  />
            <TodoList todos={  todos }  fetchTodos={fetchTodos } />
        </div>
    );
}

export default App;