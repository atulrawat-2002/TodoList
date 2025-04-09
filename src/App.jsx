import React, { useState } from "react";
import "./index.css";
import TodoList from "./TodoList";

const App = () => {
  const [inputList, setInputList] = useState({
    toDo: "",
    add: "",
  });
  const [Items, setItems] = useState([inputList]);
  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((element, index) => {
        return id !== index;
      });
    });
  };

  const itemEvent = (event) => {
    let { value, name } = event.target;
    if (name === "toDo") {
      setInputList((oldData) => {
        return {
          ...oldData,
          [name]: value,
          ["add"]: "delete",
        };
      });
    } else if (name === "add") {
      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
      setInputList(() => {
        return {
          ["add"]: "",
          ["toDo"]: "",
        };
      });
    }
  };

  return (
    <>
      <div className="main">
        <div className="center_box">
          <div id="upper-box">
            <br />
            <h1 className="top-heading">ToDo List</h1>
            <br />
            <input
              type="text"
              name="toDo"
              id="toDoInput"
              autoFocus={true}
              value={inputList.toDo}
              placeholder="Enter ToDo"
              className="todo-input"
              onChange={itemEvent}
            />
            <button
              id="add-btn" 
              className="btn"
              name="add"
              value={inputList.add}
              onClick={itemEvent}
            >
              +
            </button>
          </div>
          <ol>
            {Items.map((itemVal, index) => {
              return (
                <TodoList
                  text={itemVal}
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
