import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItem = currTodoItems;
  if (action.type === "New_Item") {
    newTodoItem = [
      ...currTodoItems,
      { name: action.payload.newItem, duedate: action.payload.newdueDate },
    ];
  } else if (action.type === "Delete_Item") {
    newTodoItem = currTodoItems.filter(
      (item) => item.name !== action.payload.newItem
    );
  }
  return newTodoItem;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (newItem, newdueDate) => {
    const newItemAction = {
      type: "New_Item",
      payload: {
        newItem,
        newdueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "Delete_Item",
      payload: {
        newItem: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
