import React from 'react';
import './App.css';
import Designs from './Designs/Designs/Designs';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exports from './Designs/Exports/Exports';
import DrawAWebSite from './Designs/Draw/DrawAWebSite';
import Uploadcode from './pages/UploadCode/Uploadcode';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login/Login';


function App() {
  return (
    <section className="App">
        <BrowserRouter> 
            <Routes>

              <Route path='/'  element={<Home />} />
              <Route path='/design'  element={<Designs />} />
              <Route path='/export'  element={<Exports />} />
              <Route path='/draw'  element={<DrawAWebSite />} />
              <Route path='/upload'  element={<Uploadcode />} />
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Login/>} />
            </Routes>
        </BrowserRouter>
    </section>
  );
}

export default App;