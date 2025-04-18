import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/global/universal.css";
import styles from "./css/main.module.css"
import MobileMenu from './components/MobileMenu.jsx';
import Home from './directory/Home.jsx';
import Aside from './components/Aside.jsx';
import System from './directory/System.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import BluetoothAndDevices from './directory/BluetoothAndDevices.jsx';
import { FeedbackProvider } from './components/FeedbackDialog.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <MobileMenu />
      <FeedbackProvider>
        <div className={styles["display-main-layout"]}>
          <Aside />
          <Routes>
            <Route path="computer-settings/" element={<Home />} />
            <Route path="/computer-settings/system" element={<System />} />
            <Route path="/computer-settings/bluetooth-and-devices" element={<BluetoothAndDevices />} />
          </Routes>
        </div>
      </FeedbackProvider>
    </BrowserRouter>
  </StrictMode>,
);
