import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map((Item) => (
          <TodoItem
            TodoName={Item.name}
            key={Item.name}
            TodoDate={Item.duedate}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
