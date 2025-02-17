import "./TodoItem.css"

const TodoItem = ({TaskName, TaskDate, id, handleOnDelete}) => {
    return (
        <div className="todo-container">
          <p className="task">{TaskName}</p>
          <p className="date">{TaskDate}</p>
          <button onClick={() => handleOnDelete(id)} className="btn btn-danger">Delete</button>
          <hr />
        </div>
    )
}

export default TodoItem;