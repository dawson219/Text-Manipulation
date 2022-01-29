import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React,{useState} from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message , type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }

  const toggleMode = ()=>{
    // removeAllClasses();
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.body.classList.add('bg-'+cls);
      showAlert('Light Mode Enabled' , 'success');
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#062a4e';
      showAlert('Dark Mode Enabled' , 'success')

    }
  }
  // const removeAllClasses = ()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-dark');
  // }
  return (
    <>
      <Navbar mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert}/>
      <About mode={mode}/> 
      </div>
    </>
  );
}

export default App;
