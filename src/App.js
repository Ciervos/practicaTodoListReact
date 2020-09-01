import React from "react";
import Tasks from "./components/todolistcall/Task/index";
import AddTask from "./components/todolistcall/AddTask/AddTask";

class App extends React.Component {
  constructor(props){
  super(props)

   this.state = {
     tasks: []
   };
  }
handleCall(inputValue){
  const {tasks} = this.state;
  this.setState({
    tasks: [...tasks, inputValue]
  });
}

  render() {
    const {tasks} = this.state;
    return (
      <>
        <AddTask propDePrueba={(inputValue)=> this.handleCall(inputValue)}/>
        <Tasks tasks={tasks}/>
      </>
    );
  }
}

export default App;