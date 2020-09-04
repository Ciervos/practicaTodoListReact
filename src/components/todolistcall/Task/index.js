import React from "react";

function Task(props) {
  
  function handleClick() {
    if (props.handleSecondCb) {
      props.handleSecondCb(props.id);
    }
  }

  return (
    <li style={props.isCompleted ? { color: "green" } : { color: "black" }} onClick={handleClick}>
      {props.name}      
    </li>
  );
}

export default Task;