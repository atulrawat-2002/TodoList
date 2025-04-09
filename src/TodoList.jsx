import React from "react";

const TodoList = (props) => {
  if (props.text.toDo === "") {
  } else {
    return (
      <>
        <div className="item-box">
          <span
            class="material-symbols-sharp"   
            id="del-btn"
            onClick={() => {
              props.onSelect(props.id);
            }}
          >
            {props.text.add}
          </span>
          <li>{props.text.toDo}</li>
        </div>
      </>
    );
  }
};

export default TodoList; 
