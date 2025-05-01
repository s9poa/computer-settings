import React from "react";
import { useLocation, Link } from "react-router";
import styles from "../css/components/aside.module.css";
import '../assets/fontawesome/css/all.min.css';

function Aside() {
    const location = useLocation();

    return (
        <aside className={styles["main-aside"]}>
            <div className={styles.header}>
                <i className="fa-solid fa-circle-user"></i>
                <div>
                    <h1 className={styles.name}>username</h1>
                    <p className={styles.email}>user@address.com</p>
                </div>
            </div>

            <form>
                <label htmlFor="aside__search__desktop" className="visually-hidden">Search:</label>
                <div>
                    <input type="text" placeholder="Find a setting" id="aside__search__desktop" required/>
                    <button aria-label="Search">
                        <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                    </button>
                </div>
            </form>

            <nav>
                <Link to="/computer-settings/" className={location.pathname === "/computer-settings/" ? styles.active : ""}><i className="fa-solid fa-house"></i>Home</Link>
                <Link to="/computer-settings/system" className={location.pathname === "/computer-settings/system" ? styles.active : ""}><i className="fa-solid fa-computer"></i>System</Link>
                <Link to="/computer-settings/bluetooth-and-devices" className={location.pathname === "/computer-settings/bluetooth-and-devices" ? styles.active : ""}><i className="fa-solid fa-tower-broadcast"></i>Bluetooth & Devices</Link>
                <Link to="/computer-settings/network-and-internet" className={location.pathname === "/computer-settings/network-and-internet" ? styles.active : ""}><i className="fa-solid fa-wifi"></i>Network & Internet</Link>
                <Link to="/computer-settings/personalization" className={location.pathname === "/computer-settings/personalization" ? styles.active : ""}><i className="fa-solid fa-pen"></i>Personalization</Link>
                <Link to="/computer-settings/apps" className={location.pathname === "/computer-settings/apps" ? styles.active : ""}><i className="fa-solid fa-shapes"></i>Apps</Link>
                <Link to="/computer-settings/accounts" className={location.pathname === "/computer-settings/accounts" ? styles.active : ""}><i className="fa-solid fa-user"></i>Accounts</Link>
                <Link to="/computer-settings/time-and-language" className={location.pathname === "/computer-settings/time-and-language" ? styles.active : ""}><i className="fa-solid fa-globe"></i>Time & Language</Link>
                <Link to="/computer-settings/gaming" className={location.pathname === "/computer-settings/gaming" ? styles.active : ""}><i className="fa-solid fa-gamepad"></i>Gaming</Link>
                <Link to="/computer-settings/accessibility" className={location.pathname === "/computer-settings/accessibility" ? styles.active : ""}><i className="fa-solid fa-universal-access"></i>Accessibility</Link>
                <Link to="/computer-settings/privacy-and-security" className={location.pathname === "/computer-settings/privacy-and-security" ? styles.active : ""}><i className="fa-solid fa-shield"></i>Privacy & Security</Link>
                <Link to="/computer-settings/windows-update" className={location.pathname === "/computer-settings/windows-update" ? styles.active : ""}><i className="fa-solid fa-arrows-rotate"></i>Windows Update</Link>
            </nav>
        </aside>
    );
}

export default Aside;
