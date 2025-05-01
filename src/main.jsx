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
import NetworkAndInternet from './directory/NetworkAndInternet.jsx';
import Personalization from './directory/Personalization.jsx';
import Apps from './directory/Apps.jsx';
import Accounts from './directory/Accounts.jsx';
import TimeAndLanguage from './directory/TimeAndLanguage.jsx';
import Gaming from './directory/Gaming.jsx';
import Accessibility from './directory/Accessibility.jsx';
import PrivacyAndSecurity from './directory/PrivacyAndSecurity.jsx';
import WindowsUpdate from './directory/WindowsUpdate.jsx';

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
            <Route path="/computer-settings/network-and-internet" element={<NetworkAndInternet />} />
            <Route path="/computer-settings/personalization" element={<Personalization />} />
            <Route path="/computer-settings/apps" element={<Apps />} />
            <Route path="/computer-settings/accounts" element={<Accounts />} />
            <Route path="/computer-settings/time-and-language" element={<TimeAndLanguage />} />
            <Route path="/computer-settings/gaming" element={<Gaming />} />
            <Route path="/computer-settings/accessibility" element={<Accessibility />} />
            <Route path="/computer-settings/privacy-and-security" element={<PrivacyAndSecurity />} />
            <Route path="/computer-settings/windows-update" element={<WindowsUpdate />} />
          </Routes>
        </div>
      </FeedbackProvider>
    </BrowserRouter>
  </StrictMode>,
);
