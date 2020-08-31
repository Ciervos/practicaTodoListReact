import React, { useState } from 'react';
import Task from './lista';

function Todolistsincall() {
  const [elinput,setElinput] = useState("");
  const [lista, setLista] = useState([]);

  function handleChange(e){
   setElinput(e.target.value)
   
  }
 
  function handleClick(){
    const newState = [...lista,elinput]
   if(elinput!=""){ 
   setLista(newState)
   setElinput("")}
   }

  return (
    <>
    <input name="uninput" type="text" onChange={handleChange} value={elinput}/> <button onClick={handleClick}>Agregar uwu</button>
 
    {lista.map((name,key) => {
        return <Task key={key}
                   name={name}/>;
      })}

    </>
  )
}

export default Todolistsincall;