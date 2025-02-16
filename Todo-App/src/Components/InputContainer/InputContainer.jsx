import "./InputContainer.css";

const InputContainer = () => {
  return (
    <>
      <div className="main-container">
        <div className="header">
          <h1>TODO-APP</h1>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter a task"
            className="todo-input"
          />
          <input type="Date" className="todo-date" name="Date" />
          <button className="btn btn-success">Add</button>
        </div>
      </div>
    </>
  );
};

export default InputContainer;
