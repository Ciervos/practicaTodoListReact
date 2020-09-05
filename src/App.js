import React, { useState, useEffect } from "react";
import AddTask from "./components/todolistcall/AddTask/index";
import Tasks from "./components/todolistcall/Tasks/index";

function App() {
   const [tasks, setTasks] = useState([]);
//   const [login, setLogin] = useState("");

//   useEffect(() => {
//  async function fetchData(){
//    const data = await fetch("https://api.github.com/users/Ciervos");
//    const dataJson = await data.json();

//    console.log(dataJson);
//    setLogin(dataJson.login);
//  }
//    fetchData();
//   });


  function handleInputValue(value) {
    setTasks([
      ...tasks,
      {
        value,
        isCompleted: false
      }
    ]);
  }

  function handleCompleted(info){

  let modifiedTasks = tasks.map((task) => {
    if (task.value == tasks[info].value) {
        return {
          value: task.value,
          isCompleted: !task.isCompleted
        };
      }

     return task;
    });

    setTasks(modifiedTasks);


// Primera forma resuelta, no es la ideal

//    {tasks.map((task, key) => {
//     if(key == info){
//    return(
//      task.isCompleted = !task.isCompleted
//    ) 
//     }
//   })}
 

  
// setTasks([...tasks]);
   
  }

  return (
    <>
      {/* <p>Login: {login}</p> */}
      <AddTask handleCallback={handleInputValue} />
      <Tasks tasks={tasks} handleSecondCb={handleCompleted} />
      Tareas resultas:
      <ul>
        <li>ACA VAN</li>
      </ul>
    </>
  );
}

export default App;