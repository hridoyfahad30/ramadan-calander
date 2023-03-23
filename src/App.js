import './App.css';
import Calanders from './component/Calanders/Calanders';
import Header from './component/Header/Header';
import React, { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="App container mx-auto">
      <Header setSearchValue={setSearchValue} searchValue={searchValue}></Header>
      <Calanders city={searchValue}></Calanders>
      
    </div>
  );
}

export default App;
