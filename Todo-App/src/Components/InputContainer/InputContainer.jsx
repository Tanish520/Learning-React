import "./InputContainer.css";
import { useState } from "react";
const InputContainer = ({ handleOnAdd }) => {
  const [TodoName, setTodoName] = useState("");
  const [DueDate, setDueDate] = useState("");
  const handleInput = (e) => {
    setTodoName(e.target.value);
  };
  const handleDate = (e) => {
    setDueDate(e.target.value);
  };
  const handleOnClick = () => {
    if (!TodoName.trim() || !DueDate.trim()) {
      alert("Please enter a valid task and date!");
      return;
    }
    handleOnAdd(TodoName, DueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <>
      <div classNameNameNameNameName="main-container">
        <div classNameNameNameNameName="header">
          <h1>TODO-APP</h1>
        </div>
        <div classNameNameNameNameName="input-container">
          <input
            onChange={handleInput}
            type="text"
            value={TodoName}
            placeholder="Enter a task"
            classNameNameNameNameName="todo-input"
          />
          <input
            onChange={handleDate}
            value={DueDate}
            type="Date"
            classNameNameNameNameName="todo-date"
            name="Date"
          />
          <button
            type="submit"
            onClick={handleOnClick}
            classNameNameNameNameName="btn btn-success"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default InputContainer;
