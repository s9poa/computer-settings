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
                <label htmlFor="aside__search" className="visually-hidden">Search:</label>
                <div>
                    <input type="text" placeholder="Find a setting" id="aside__search" required/>
                    <button aria-label="Search">
                        <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                    </button>
                </div>
            </form>

            <nav>
                <Link to="/" className={location.pathname === "/" ? styles.active : ""}><i className="fa-solid fa-house"></i>Home</Link>
                <Link to="/system" className={location.pathname === "/system" ? styles.active : ""}><i className="fa-solid fa-computer"></i>System</Link>
                <Link to="/bluetooth" className={location.pathname === "/bluetooth" ? styles.active : ""}><i className="fa-solid fa-tower-broadcast"></i>Bluetooth & Devices</Link>
                <Link to="/network" className={location.pathname === "/network" ? styles.active : ""}><i className="fa-solid fa-wifi"></i>Network & Internet</Link>
                <Link to="/personalization" className={location.pathname === "/personalization" ? styles.active : ""}><i className="fa-solid fa-pen"></i>Personalization</Link>
                <Link to="/apps" className={location.pathname === "/apps" ? styles.active : ""}><i className="fa-solid fa-shapes"></i>Apps</Link>
                <Link to="/accounts" className={location.pathname === "/accounts" ? styles.active : ""}><i className="fa-solid fa-user"></i>Accounts</Link>
                <Link to="/language" className={location.pathname === "/language" ? styles.active : ""}><i className="fa-solid fa-globe"></i>Time & Language</Link>
                <Link to="/gaming" className={location.pathname === "/gaming" ? styles.active : ""}><i className="fa-solid fa-gamepad"></i>Gaming</Link>
                <Link to="/accessibility" className={location.pathname === "/accessibility" ? styles.active : ""}><i className="fa-solid fa-universal-access"></i>Accessibility</Link>
                <Link to="/privacy" className={location.pathname === "/privacy" ? styles.active : ""}><i className="fa-solid fa-shield"></i>Privacy & Security</Link>
                <Link to="/update" className={location.pathname === "/update" ? styles.active : ""}><i className="fa-solid fa-arrows-rotate"></i>Windows Update</Link>
            </nav>
        </aside>
    );
}

export default Aside;
