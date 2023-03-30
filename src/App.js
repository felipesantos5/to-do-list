import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./styles/reset.css";
import "./styles/app.css";
import "boxicons";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: "Please write a task",
      });
    }
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <main className="paper">
      <h1>TO DO LIST</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a new task" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />

        <button className="button-submit" type="submit">
          Add
        </button>
      </form>

      <ul className="content">
        {todos.map((todo, index) => (
          <li key={index} className="card">
            <p>{todo}</p>
            <div className="icons">
              <box-icon size="md" className="icon" name="trash-alt" type="solid" onClick={() => handleDelete(index)}></box-icon>
              <box-icon size="md" type="solid" name="check-square"></box-icon>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default TodoList;
