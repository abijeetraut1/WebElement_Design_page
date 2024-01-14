import React from 'react';
import './App.css';
import Designs from './Designs/Designs/Designs';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exports from './Designs/Exports/Exports';
import Uploadcode from './pages/UploadCode/Uploadcode';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login/Login';
import Signup from './pages/Auth/Signup/Signup';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/design' element={<Designs />} />
          <Route path='/export' element={<Exports />} />
          <Route path='/upload' element={<Uploadcode />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;