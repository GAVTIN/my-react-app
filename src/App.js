import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import React, { useState } from 'react';


function App() {
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
        if (mode === 'light'){
            setMode('dark');
            document.body.style.background = '#210653';
            document.body.style.color = 'white';
        }
        else{
            setMode('light');
            document.body.style.background = 'white';
            document.body.style.color = 'black';
        }
    }
  return (
<>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
    <div className="container">
    <TextForm heading="Enter the Text to Analyze!"/>
    {/* <About /> */}
    </div>
</>  
  );
}

export default App;
