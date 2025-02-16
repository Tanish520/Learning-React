import TodoItem from "../TodoItem/TodoItem";
import "./TodoItemList.css";
const TodoItemList = (props) => {
  const { Tasks } = props;
  return (
    <>
      <div className="todo-list">
        {Tasks.map((task) => {
          return (
            <TodoItem
              key={task.date}
              TaskName={task.task}
              TaskDate={task.date}
            />
          );
        })}
      </div>
    </>
  );
};

export default TodoItemList;
