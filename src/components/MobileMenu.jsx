import { useState, useRef, useEffect, useCallback } from "react";
import styles from "../css/components/mobile-menu.module.css";
import { useLocation, Link } from "react-router";

function MobileMenu() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const asideRef = useRef(null);
    const toggleBtnRef = useRef(null);
    const menuOpenRef = useRef(menuOpen);
    useEffect(() => { menuOpenRef.current = menuOpen; }, [menuOpen]);
    const toggleMenu = useCallback(() => { setMenuOpen(prev => !prev); }, []);
    const closeMenu = useCallback(() => { setMenuOpen(false); toggleBtnRef.current && toggleBtnRef.current.focus(); }, []);
    useEffect(() => {
        const handleClickOutside = (event) => { 
            if (menuOpenRef.current && asideRef.current && !asideRef.current.contains(event.target) && toggleBtnRef.current && !toggleBtnRef.current.contains(event.target)) { 
                closeMenu(); 
            } 
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => { document.removeEventListener("mousedown", handleClickOutside); };
    }, [closeMenu]);
    useEffect(() => {
        if (!menuOpen) return;
        const node = asideRef.current;
        const focusableElements = node.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
        const focusable = Array.prototype.slice.call(focusableElements);
        if (focusable.length > 0) { focusable[0].focus(); }
        const handleKeyDown = (e) => {
            if (e.key === "Tab") {
                const firstElement = focusable[0];
                const lastElement = focusable[focusable.length - 1];
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) { e.preventDefault(); lastElement.focus(); }
                } else {
                    if (document.activeElement === lastElement) { e.preventDefault(); firstElement.focus(); }
                }
            }
        };
        node.addEventListener("keydown", handleKeyDown);
        return () => { node.removeEventListener("keydown", handleKeyDown); };
    }, [menuOpen]);
    return (
        <header className={styles["mobile-header"]}>
            <aside ref={asideRef} className={styles["main-aside"]} style={{ transform: menuOpen ? "translateX(0)" : "translateX(-100%)", transition: "transform 0.3s ease-in-out" }} aria-hidden={!menuOpen} inert={!menuOpen ? true : undefined}>
                <div className={styles.header}>
                    <i className="fa-solid fa-circle-user"></i>
                    <div>
                        <h1 className={styles.name}>username</h1>
                        <p className={styles.email}>user@address.com</p>
                    </div>
                    <button aria-label="Close menu" className={styles["close-menu"]} onClick={closeMenu}><i className="fa-solid fa-xmark" aria-hidden="true"></i></button>
                </div>
                <form>
                    <label htmlFor="aside__search__mobile" className="visually-hidden">Search:</label>
                    <div>
                        <input type="text" placeholder="Find a setting" id="aside__search__mobile" required/>
                        <button aria-label="Search"><i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i></button>
                    </div>
                </form>
                <nav>
                    <Link to="/computer-settings/" onClick={closeMenu} className={location.pathname === "/computer-settings/" ? styles.active : ""}><i className="fa-solid fa-house"></i>Home</Link>
                    <Link to="/computer-settings/system" onClick={closeMenu} className={location.pathname === "/computer-settings/system" ? styles.active : ""}><i className="fa-solid fa-computer"></i>System</Link>
                    <Link to="/computer-settings/bluetooth-and-devices" onClick={closeMenu} className={location.pathname === "/computer-settings/bluetooth-and-devices" ? styles.active : ""}><i className="fa-solid fa-tower-broadcast"></i>Bluetooth & Devices</Link>
                    <Link to="/computer-settings/network-and-internet" onClick={closeMenu} className={location.pathname === "/computer-settings/network-and-internet" ? styles.active : ""}><i className="fa-solid fa-wifi"></i>Network & Internet</Link>
                    <Link to="/computer-settings/personalization" onClick={closeMenu} className={location.pathname === "/computer-settings/personalization" ? styles.active : ""}><i className="fa-solid fa-pen"></i>Personalization</Link>
                    <Link to="/computer-settings/apps" onClick={closeMenu} className={location.pathname === "/computer-settings/apps" ? styles.active : ""}><i className="fa-solid fa-shapes"></i>Apps</Link>
                    <Link to="/computer-settings/accounts" onClick={closeMenu} className={location.pathname === "/computer-settings/accounts" ? styles.active : ""}><i className="fa-solid fa-user"></i>Accounts</Link>
                    <Link to="/computer-settings/time-and-language" onClick={closeMenu} className={location.pathname === "/computer-settings/time-and-language" ? styles.active : ""}><i className="fa-solid fa-globe"></i>Time & Language</Link>
                    <Link to="/computer-settings/gaming" onClick={closeMenu} className={location.pathname === "/computer-settings/gaming" ? styles.active : ""}><i className="fa-solid fa-gamepad"></i>Gaming</Link>
                    <Link to="/computer-settings/accessibility" onClick={closeMenu} className={location.pathname === "/computer-settings/accessibility" ? styles.active : ""}><i className="fa-solid fa-universal-access"></i>Accessibility</Link>
                    <Link to="/computer-settings/privacy-and-security" onClick={closeMenu} className={location.pathname === "/computer-settings/privacy-and-security" ? styles.active : ""}><i className="fa-solid fa-shield"></i>Privacy & Security</Link>
                    <Link to="/computer-settings/update" onClick={closeMenu} className={location.pathname === "/computer-settings/update" ? styles.active : ""}><i className="fa-solid fa-arrows-rotate"></i>Windows Update</Link>
                </nav>
            </aside>
            <button ref={toggleBtnRef} className={styles["open-mobile-menu"]} aria-label="Open menu" onClick={toggleMenu}><i className="fa-solid fa-ellipsis-vertical" aria-hidden="true"></i></button>
        </header>
    )
}

export default MobileMenu;
