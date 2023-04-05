import React, { useState } from "react";
import Swal from "sweetalert2";
import "./styles/reset.css";
import { Paper, Card, Title, Form, Content, Icons, Wrapper } from "./styles";

function TodoList() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);
  // const [xp, setXp] = useState();
  // const [xpbar, setXpBar] = useState();

  const handleSubmit = () => {
    if (!task) {
      Swal.fire({
        con: "error",
        title: "Something went wrong!",
        text: "Please write a task",
      });
    } else {
      const newTask = {
        id: Math.random(),
        task: task,
        checked: false,
        xp: 10,
      };
      setListTask([...listTask, newTask]);
      setTask("");
    }
  };

  const handleDelete = (id) => {
    const newList = listTask.filter((task) => task.id !== id);
    setListTask(newList);
  };

  const toggleChecked = (id, checked) => {
    const index = listTask.findIndex((task) => task.id === id);
    const newList = listTask;
    newList[index].checked = !checked;
    setListTask([...newList]);
  };

  return (
    <Wrapper>
      <Paper>
        <Title>TO DO LIST</Title>

        <Form>
          <input type="text" placeholder="Add a new task" value={task} onChange={(event) => setTask(event.target.value)} />

          <button className="button-submit" type="submit" onClick={handleSubmit}>
            Add
          </button>
        </Form>

        <Content>
          {listTask.map((task) => (
            <>
              <Card key={task.id} Item checked={task.checked}>
                <p>{task.task}</p>
                <Icons>
                  <button className="button-icon" onClick={() => toggleChecked(task.id, task.checked)}>
                    <i className="bx bxs-check-square icon"></i>
                  </button>
                  <button className="button-icon">
                    <i className="bx bxs-trash-alt icon" onClick={() => handleDelete(task.id)}></i>
                  </button>
                </Icons>
              </Card>
            </>
          ))}
        </Content>
      </Paper>
    </Wrapper>
  );
}

export default TodoList;
