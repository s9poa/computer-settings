import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import "./css/global/universal.css";
import Home from './directory/Home.jsx';
import Aside from './components/Aside.jsx';
import System from './directory/System.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/system" element={<System />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
