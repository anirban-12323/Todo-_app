import { useState, useRef } from "react";
import { MdAddBox } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef(); //store references for todo input
  const dueDateElement = useRef(); // store references for date input

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    // get values from input via refs
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    onNewItem(todoName, dueDate);

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button" type="submit">
            <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
