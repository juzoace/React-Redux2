import React from 'react';
import './App.css';
import Functional from "./components/functional"
import ClassFunc from "./components/class" 

const App = () => {
  return (
    <div className="App">
    <Functional />
    <br></br>
    <ClassFunc />
    </div>
  );
}

export default App;
