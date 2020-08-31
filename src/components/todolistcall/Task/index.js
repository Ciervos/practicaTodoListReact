import React from "react";
import Task from "../Task";

class Tasks extends React.Component {
  render() {
    return (
      <ul className="taskContainer">
        {[].map((name, key) => {
          return <Task name={name} key={key} />;
        })}
      </ul>
    );
  }
}

export default Tasks;