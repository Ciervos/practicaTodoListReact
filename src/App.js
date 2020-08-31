import React from "react";
import Tasks from "./components/todolistcall/Task/index";
import AddTask from "./components/todolistcall/AddTask/AddTask";

class App extends React.Component {
handleCall(){
  console.log("hello")
}

  render() {
    return (
      <>
        <AddTask propDePrueba={()=> this.handleCall()}/>
        <Tasks />
      </>
    );
  }
}

export default App;