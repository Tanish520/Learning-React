import "./TodoItem.css"

const TodoItem = ({TaskName, TaskDate}) => {
    return (
        <div className="todo-container">
          <p className="task">{TaskName}</p>
          <p className="date">{TaskDate}</p>
          <button className="btn btn-danger">Delete</button>
          <hr />
        </div>
    )
}

export default TodoItem;