import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Carousel from './components/Carousel.js';
import TextForm from './components/TextForm.js';
import About from './components/About.js';
import React ,{useState} from 'react';
import Alert from './components/Alert.js';
import Pallets from './components/Pallets.js';

let name="Rishi Kumar Gupta";
function App() {
  const [mode,setMode] = useState('light');

const toggleMode = () =>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("dark mode has been enabled","success");

  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has been enabled", "success");

  }
}


const [alert,setAlert] = useState('null');

const showAlert = (message,type) =>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

const [colorCurrent, setColorCurrent] = useState('dark');




  return (
    <>
    {/* navbar importing here */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
{/* here we importing the alert function */}
<Alert alert={alert}/>
{/* alert is ended here */}

{/* here pallet is started */}
<Pallets setColorCurrent={setColorCurrent}/>
{/* pallet is ended here */}



{/* form of textutils here */}
<div className="container my-3">
<TextForm heading="Enter The Text To Analyze Text" showAlert={showAlert} mode={mode}/>
</div>

{/* here is about.js for darkmode  */}
{/* about.js is here this is according of courses with dark mode facilities */}
{/* <About/> */}

</>
  );
}

export default App;
