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

const daysCompleted = [
  {
  date: "24-3-2022",
  blog: "",
  },
  {
  date: "25-3-2022",
  blog: "",
  },
  {
  date: "26-3-2022",
  blog: "",
  },
  {
  date: "27-3-2022",
  blog: "",
  },
  {
  date: "28-3-2022",
  blog: "",
  },
  {
  date: "29-3-2022",
  blog: {
    link:"https://dev.to/justtanwa/javascript-array-methods-mapping-4ioj",
    title: "JavaScript Array Methods - Mapping"
    },
  },
  {
  date: "30-3-2022",
  blog: "",
  },
  {
  date: "31-3-2022",
  blog: "",
  },
  {
  date: "01-4-2022",
  blog: {
    link: "https://dev.to/justtanwa/javascript-array-methods-filtering-1k3p",
    title: "JavaScript Array Methods - Filtering"
    },
  },
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/today" element={<Today />} />
        <Route path="/archive" element={<Archive daysCompleted={daysCompleted} />} >
          <Route index element={<ArchiveIndex daysCompleted={daysCompleted} />} />
          <Route path=":dayNum" element={<Day />} />
        </Route>
        <Route path="/blog" element={<Blog daysCompleted={daysCompleted} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
