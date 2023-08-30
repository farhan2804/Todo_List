import React from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <>
      <div className="Todo_Style">
        <i
          id="fontAwesome"
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li style={{fontSize:25,color:'blueviolet'}}>{props.text}</li>
      </div>
    </>
  );
};

export default TodoItem;
