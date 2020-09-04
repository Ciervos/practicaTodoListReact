import React from "react";
import Task from "../Task/index";

function Tasks(props) {

  
  return (
    <ul>
      {props.tasks.map((task, key) => {
        return (
          <Task name={task.value} id={key} isCompleted={task.isCompleted} handleSecondCb={props.handleSecondCb} key={key}/>
        );
      })}
    </ul>
  );
}

export default Tasks;