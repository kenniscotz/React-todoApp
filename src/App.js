import React, { useState, useId } from "react";
import "./App.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const id = useId();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your list items here"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul key={id}>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>

    // It renders an input field and a button to add new todos. When the button is clicked,
    // the new todo is added to the list and the input field is cleared.
  );
};

export default TodoList;
