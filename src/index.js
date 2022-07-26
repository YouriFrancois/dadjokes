import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Jokes from './Jokes';
import Single from './Single';
import Navbar from './Navbar';
import Home from './Home';
import Random from './Random';
import { BrowserRouter,  Routes, Route, } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>

  <main>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search" element={<App />} />
    <Route path="/jokes" element={<Jokes/>} />
    <Route path="/single" element={<Single/>} />
    <Route path="/random" element={<Random/>} />
    </Routes>
    </main>
 
  </BrowserRouter>
);
