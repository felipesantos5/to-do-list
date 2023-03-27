import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [lisTask, setListTask] = useState([]);

  const addTask = () => {
    if (!task) {
      alert("write a task");
    } else {
      console.log("foi");
    }
    setTask("");
  };

  return (
    <div className="App">
      <h1>To do list</h1>

      <div>
        <input className="input" placeholder="Task" value={task} onChange={(event) => setTask(event.target.value)} />

        <button onClick={addTask}>send</button>
      </div>

      <p>{task} oi</p>
    </div>
  );
}

export default App;
