import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Components/Pages/About';

const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing;