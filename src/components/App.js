import React, { useState} from "react";
import '../styles/App.css';
import Form from "./Form";
import Welcome from "./Welcome";

const App = () => {
const [formValues,setFormvalues]= useState({})
  const getValues=(data)=>{
    console.log(data);
    setFormvalues(data)

  }
  return (
    <div id="main">
      <Form getValues={getValues}/>
      <Welcome formValues={formValues}/>
    </div>
  )
}


export default App;
