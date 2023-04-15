import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import CarList from './pages/CarList';

function App() {
  return (
    <div className="App">
      <CarList />
    </div>
  );
}

export default App;
