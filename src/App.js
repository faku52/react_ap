import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Cart } from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
   <Header />
   <div>
    <Routes>
      <Route path="/" element = {<Home/>}>
      </Route>
      <Route path="/Cart" element={<Cart />}>
      </Route>
    </Routes>
   </div>
    </BrowserRouter>
  );
}

export default App;
