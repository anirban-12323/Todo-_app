import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";

import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const initialtodoItems = [];

  const [todoItems, settodoItems] = useState(initialtodoItems);

  const handlenewItem = (newItem, newdueDate) => {
    settodoItems((currValue) => {
      const newTodoItem = [
        ...currValue,
        { name: newItem, duedate: newdueDate },
      ];
      return newTodoItem;
    });
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    settodoItems(newTodoItems);
  };
  return (
    <div>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo onNewItem={handlenewItem}></AddTodo>
        <WelcomeMessage todoItems={todoItems}></WelcomeMessage>

        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </center>
    </div>
  );
}

export default App;
