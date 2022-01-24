import React from 'react';
import './App.css'
import Navbar from './pages/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Photos from './pages/Photos';
import Car from './pages/Car';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Photos />} />
          <Route path='/car' element={<Car />} />
        </Routes>
      </BrowserRouter>


    </>

  );
}

export default App;
