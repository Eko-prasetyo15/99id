import React from 'react';
import './App.css';
import Card from './Content/card';
import { store } from './helper';

function App() {
  const data = store

  return (
    <div className="App">

      <Card data={data}/>
    
    </div>
  );
}

export default App;
