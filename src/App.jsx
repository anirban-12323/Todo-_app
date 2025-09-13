import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";

import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";

import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  // const [todoItems, settodoItems] = useState(initialtodoItems);

  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>

        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
