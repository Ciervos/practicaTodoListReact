import React from "react";
import Task from "../UniqueTask/index";

class Tasks extends React.Component {
  render() {
    console.log(2323, this.props);
    const { tasks } = this.props;

    return (
      <>
        <ul className="taskContainer">
          {tasks.map((name, key) => {
            return <Task name={name} key={key} />;
          })}
        </ul>
      </>
    );
  }
}

export default Tasks;