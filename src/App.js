import React from 'react';
import './App.css';
import Designs from './Designs/Designs/Designs';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exports from './Designs/Exports/Exports';

function App() {

  return (
    <div className="App">
        <BrowserRouter> 
            <Routes>
              <Route path='/design'  element={<Designs />} />
              <Route path='/export'  element={<Exports />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;