import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import "./css/global/universal.css";
import styles from "./css/main.module.css"
import MobileMenu from './components/MobileMenu.jsx';
import Home from './directory/Home.jsx';
import Aside from './components/Aside.jsx';
import System from './directory/System.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MobileMenu />
      <div className={styles["display-main-layout"]}>
        <Aside />
        <Routes>
          <Route path="computer-settings/" element={<Home />} />
          <Route path="/computer-settings/system" element={<System />} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>,
);
