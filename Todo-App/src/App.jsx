import "./App.css";
import InputContainer from "./Components/InputContainer/InputContainer";
import TodoItemList from "./Components/TodoItemList/TodoItemList";
import { useState } from "react";

function App() {
  const [Tasks, setTasks] = useState([]);
  const handleOnAdd = (TodoName, DueDate) => {
    console.log(TodoName, DueDate);
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      TaskName: TodoName,
      Date: DueDate,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  const handleOnDelete = (id) => {
    const updatedTasks = Tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }
  return (
    <>
      <InputContainer handleOnAdd = {handleOnAdd} />
      {Tasks.length >= 1 ? (
        <TodoItemList Tasks={Tasks} handleOnDelete = {handleOnDelete} />
      ) : (
        <h1 style={{ textAlign: "center" }}>No Tasks</h1>
      )}
    </>
  );
}

export default App;
