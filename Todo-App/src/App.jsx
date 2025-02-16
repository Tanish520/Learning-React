import "./App.css";
import InputContainer from "./Components/InputContainer/InputContainer";
import TodoItemList from "./Components/TodoItemList/TodoItemList";
import { useState } from "react";
function App() {
  const [Tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const handleInput = (event) => {
    setTask(event.target.value);
  };
  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handleOnAdd = () => {
    if (task === "" || date === "") {
      alert("Please enter a task and date");
      return;
    }
    setTasks((prevTasks) => [...prevTasks, { task, date }]);
    setTask("");  
    setDate("");
  };
  return (
    <>
      <InputContainer
        handleInput={handleInput}
        handleDate={handleDate}
        handleOnAdd={handleOnAdd}
      />
      {Tasks.length > 1 ? (
        <TodoItemList Tasks={Tasks} />
      ) : (
        <h1 style={{ textAlign: "center" }}>No Tasks</h1>
      )}
    </>
  );
}

export default App;
