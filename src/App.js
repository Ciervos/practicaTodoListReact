import React, { useState } from "react";
import AddTask from "./components/todolistcall/AddTask/index";
import Tasks from "./components/todolistcall/Tasks/index";

function App() {
  const [tasks, setTasks] = useState([]);


  function handleInputValue(value) {
    setTasks([
      ...tasks,
      {
        value,
        isCompleted: false
      }
    ]);
  }

  return (
    <>
      <AddTask handleCallback={handleInputValue} />
      <Tasks tasks={tasks} />
      Tareas resultas:
      <ul>
        <li>ACA VAN</li>
      </ul>
    </>
  );
}

export default App;