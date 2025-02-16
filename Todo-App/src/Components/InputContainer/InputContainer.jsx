import "./InputContainer.css";

const InputContainer = ({handleInput, handleDate, handleOnAdd}) => {
  return (
    <>
      <div className="main-container">
        <div className="header">
          <h1>TODO-APP</h1>
        </div>
        <div className="input-container">
          <input onKeyDown={handleInput}
            type="text"
            placeholder="Enter a task"
            className="todo-input"
          />
          <input onChange={handleDate} type="Date" className="todo-date" name="Date" />
          <button onClick={handleOnAdd} className="btn btn-success">Add</button>
        </div>
      </div>
    </>
  );
};

export default InputContainer;
