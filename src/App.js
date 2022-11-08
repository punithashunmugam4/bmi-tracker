import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Data from './components/Data';
import SimpleChart from './components/BmiResults';

function App() {
  const [input,setInput]=useState([])
  return (
    <div className="App">
      <Header/>
      <UserInput input={input} setInput={setInput}/>
      <SimpleChart input={input}/>
      <p>7 Day Data </p>
      <Data input={input} setInput={setInput}/>
    </div>
  );
}

export default App;
