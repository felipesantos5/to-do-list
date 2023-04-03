/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./styles/reset.css";
import "boxicons";
import { Paper, Card, Title, Form, Content, Icons } from "./styles/GlobalStyles";

function TodoList(props) {
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
    <Paper>
      <Title>TO DO LIST</Title>

      <Form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a new task" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />

        <button className="button-submit" type="submit">
          Add
        </button>
      </Form>

      <Content>
        {todos.map((todo, index) => (
          <Card key={index} className="card" checked={true}>
            <p>{todo}</p>
            <Icons>
              <button>
                <box-icon size="md" className="icon" name="check-square" type="solid"></box-icon>
              </button>
              <button>
                <box-icon size="md" className="icon" name="trash-alt" type="solid" onClick={() => handleDelete(index)}></box-icon>
              </button>
            </Icons>
          </Card>
        ))}
      </Content>
    </Paper>
  );
}

export default TodoList;
