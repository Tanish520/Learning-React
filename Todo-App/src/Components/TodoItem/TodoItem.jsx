import "./TodoItem.css";

const TodoItem = ({ TaskName, TaskDate, id, handleOnDelete }) => {
  return (
    <div classNameNameNameNameName="todo-container">
      <p classNameNameNameNameName="task">{TaskName}</p>
      <p classNameNameNameNameName="date">{TaskDate}</p>
      <button
        onClick={() => handleOnDelete(id)}
        classNameNameNameNameName="btn btn-danger"
      >
        Delete
      </button>
      <hr />
    </div>
  );
};

export default TodoItem;
