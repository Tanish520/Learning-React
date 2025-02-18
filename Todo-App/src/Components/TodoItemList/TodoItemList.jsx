import TodoItem from "../TodoItem/TodoItem";
import "./TodoItemList.css";
const TodoItemList = (props) => {
  const { Tasks, handleOnDelete } = props;
  return (
    <>
      <div classNameNameNameNameName="todo-list">
        {Tasks.map((task) => {
          return (
            <TodoItem
              key={task.date}
              id={task.id}
              TaskName={task.TaskName}
              TaskDate={task.Date}
              handleOnDelete={handleOnDelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default TodoItemList;
