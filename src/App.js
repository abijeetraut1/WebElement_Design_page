import React from 'react';
import './App.css';
import Designs from './Designs/Designs/Designs';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exports from './Designs/Exports/Exports';
import DrawAWebSite from './Designs/Draw/DrawAWebSite';

function App() {

  return (
    <section className="App">
        <BrowserRouter> 
            <Routes>
              <Route path='/design'  element={<Designs />} />
              <Route path='/export'  element={<Exports />} />
              <Route path='/draw'  element={<DrawAWebSite />} />
            </Routes>
        </BrowserRouter>
    </section>
  );
}

export default App;