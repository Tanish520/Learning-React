import TodoItem from "../TodoItem/TodoItem";
import "./TodoItemList.css";
const TodoItemList = () => {
  let Tasks = [
    { TaskName: "Buy Milk", TaskDate: "2021-09-01" },
    { TaskName: "Buy Eggs", TaskDate: "2021-09-02" },
    { TaskName: "Buy Bread", TaskDate: "2021-09-03" },
  ];
  return (
    <>
      <div className="todo-list">
        {Tasks.map((task) => {
          return (
            <TodoItem
              key={task.TaskDate}
              TaskName={task.TaskName}
              TaskDate={task.TaskDate}
            />
          );
        })}
      </div>
    </>
  );
};

export default TodoItemList;
