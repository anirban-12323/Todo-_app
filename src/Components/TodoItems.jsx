import { useContext } from "react";
// import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  // console.log(todoItemFromContext);
  return (
    <>
      <div className="items-container">
        {todoItems.map((Item) => (
          <TodoItem
            TodoName={Item.name}
            key={`${Item.name}-${Item.duedate}`}
            TodoDate={Item.duedate}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
