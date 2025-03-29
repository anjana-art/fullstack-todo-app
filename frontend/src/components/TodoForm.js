import React, { useState} from 'react';
import axios from 'axios';
import notepen from './images/notepen.png'
import './TodoForm.css';






const TodoForm = ({fetchTodos } ) => {
  const [title, setTitle] = useState('');

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;

    try {
      await axios.post('http://localhost:6002/api/todos', { title }, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => console.log(response.data))
      .catch(error => console.error('Error:', error));

      setTitle(''); // Clear the input field
      fetchTodos(); // Refresh the todo list
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='todo-app '>
            <h2>Todo List  <img src={notepen} alt='pen img'></img></h2>
              <div className='row'>
              <input
                type="text"
                 id="input-box"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task"
              />
              <button type='submit'  id='addbutton'>Add</button>
              </div>
      </div>
    </form>
  );
};

export default TodoForm;