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
import NotFound from './components/NotFound';
import Day from './pages/Day';
import ArchiveIndex from './components/ArchiveIndex';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/today" element={<Today />} />
        <Route path="/archive" element={<Archive />} >
          <Route index element={<ArchiveIndex />} />
          <Route path=":dayNum" element={<Day />} />
        </Route>
        <Route path="/blog" element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
