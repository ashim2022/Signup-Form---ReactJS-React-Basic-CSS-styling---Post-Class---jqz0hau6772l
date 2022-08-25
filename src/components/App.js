import React, { useState} from "react";
import '../styles/App.css';
import Form from "./Form";
import Welcome from "./Welcome";

const App = () => {
const [formValues,setFormvalues]= useState([])
  const getValues=(data)=>{
    setFormvalues(data.filter(item => item.hasOwnProperty("email")))

  }
  return (
    <div id="main">
      <Form getValues={getValues}/>
      <Welcome name={formValues[0]}/>
    </div>
  )
}


export default App;
