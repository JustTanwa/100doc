import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Today from './components/Today';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Archive from './components/Archive';
import Blog from './components/Blog';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/today" element={<Today />} />
        <Route path="/Archive" element={<Archive />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);
