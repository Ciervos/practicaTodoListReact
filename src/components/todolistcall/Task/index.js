import React from "react";

function Task(props) {
  
  function handleClick() {
    const {id,handleSecondCb} = props;
    if (handleSecondCb) {
    handleSecondCb(id);
    }
  }

  return (
    <li style={props.isCompleted ? { color: "green" } : { color: "black" }} onClick={handleClick}>
      {props.name}      
    </li>
  );
}

export default Task;