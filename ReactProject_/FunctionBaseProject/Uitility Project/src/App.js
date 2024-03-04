// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alerts'
import About from './components/about';
import card from './components/card';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {

  //---------- Alerts -----------
  const [alert, setAlert] = useState(null)
  const showAlert = (message, messageType)=>{
    setAlert({
      msg: message,
      type: messageType
    })
  }

  const [mode, setMode] = useState("light")
  const toggalMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.background = "#041530"
      document.body.style.color = "white"
      showAlert("Dark mode is enable..","success")
    }else{
      setMode("light")
      document.body.style.background = "white"
      document.body.style.color = "black"
      showAlert("Light mode is enable..", "success")
    }
  }  
  return (
    <>
      <Navbar  mode = {mode} toggalMode = {toggalMode}/>
      <div className="container my-3">
        <card/>
        {/* <Alert alertDetail={alert}/>
        <Form idea="Share your idea here.." toggalMode={toggalMode}/> */}
      </div>
    </>
  );
}

export default App;
