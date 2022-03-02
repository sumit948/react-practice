import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=  useState(null)

  const showAlert = (message,type) =>{
    setAlert ({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode Enabled", "Success")
      document.title = "TextUtils-Dark"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled", "Success")
      document.title = "TextUtils-Light"
    }
  }
  //for green
  const toggleMode2 = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#adb5bd'
      showAlert("Green Mode Enabled", "Success")
      document.title = "TextUtils-Green"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled", "Success")
      document.title = "TextUtils-Light"
    }  
  }
  return (
    <>
    <Router>
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2}/>
    <Alert alert = {alert}></Alert>
    <div className="container my-3">
    
    <Switch>
      <Route exact path="/about">
        <About mode={mode}/>
      </Route>
      <Route exact path="/">
      <TextForm showAlert={showAlert} heading="Enter the text: " mode={mode} />    
      </Route> 
    </Switch>

    {/* <About/> */}
    </div>
    </Router>
    </>
  );
}

export default App;

