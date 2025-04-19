import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "../css/components/computer-specs.module.css";
import { Link } from "react-router";

function ComputerSpecs() {
    const [currentName, setCurrentName] = useState("[PC Name]");
    const [showOverlay, setShowOverlay] = useState(false);
    const [newName, setNewName] = useState("");
    const [keyboardUser, setKeyboardUser] = useState(false);
    const inputRef = useRef(null);
    const overlayRef = useRef(null);
    const lastFocusedElementRef = useRef(null);
    const handleRenameClick = useCallback((e) => { lastFocusedElementRef.current = document.activeElement; setShowOverlay(true); }, []);
    const handleSubmit = useCallback((e) => { e.preventDefault(); if(newName.trim()){ setCurrentName(newName); setNewName(""); setShowOverlay(false); } }, [newName]);
    const handleClose = useCallback(() => { setShowOverlay(false); }, []);
    const handleOverlayClick = useCallback(() => { setShowOverlay(false); }, []);
    const handleKeyDown = useCallback((e) => { if (!keyboardUser) return; if(e.key === "Tab" && overlayRef.current) { const focusable = overlayRef.current.querySelectorAll("input, button, [tabindex]:not([tabindex='-1'])"); if(focusable.length === 0) return; const first = focusable[0], last = focusable[focusable.length - 1]; if(e.shiftKey) { if(document.activeElement === first){ e.preventDefault(); last.focus(); } } else { if(document.activeElement === last){ e.preventDefault(); first.focus(); } } } }, [keyboardUser]);
    useEffect(() => { if(showOverlay && keyboardUser && inputRef.current){ inputRef.current.focus(); } }, [showOverlay, keyboardUser]);
    useEffect(() => { if(!showOverlay && lastFocusedElementRef.current){ lastFocusedElementRef.current.focus(); } }, [showOverlay]);
    const handleRenameButtonMouseDown = useCallback(() => { setKeyboardUser(false); }, []);
    const handleRenameButtonKeyDown = useCallback((e) => { if(e.key === "Enter" || e.key === " ") { setKeyboardUser(true); } }, []);
    
    return (
        <div className={styles.header}>
            <div className={styles.lc}>
                <img src="/computer-settings/desktop-bg.avif" alt="" width="160" height="95.67"/>
                <div>
                    <h2 className={styles["pc-display-name"]}>{currentName}</h2>
                    <span>Cookie Destroyer Desktop +2000 - Omega</span>
                    <button className={styles.rename} onClick={handleRenameClick} onMouseDown={handleRenameButtonMouseDown} onKeyDown={handleRenameButtonKeyDown}>Rename</button>
                </div>
            </div>
            <div className={styles.rc}>
                <Link to="/computer-settings/network-and-internet">
                    <i className="fa-solid fa-wifi"></i>
                    <div className={styles.column}>
                        <h2>Bubble Gum Kingdom</h2>
                        <span>Connected, secured</span>
                    </div>
                </Link>
                <Link to="/computer-settings/update">
                    <i className="fa-solid fa-arrows-rotate"></i>
                    <div className={styles.column}>
                        <h2>Windows Update</h2>
                        <span>Attention needed</span>
                    </div>
                </Link>
            </div>
            { showOverlay && <form className={styles.overlay} ref={overlayRef} onSubmit={handleSubmit} onClick={handleOverlayClick} onKeyDown={handleKeyDown}>
                <div>
                    <label htmlFor="computer-specs__name" onClick={(e) => e.stopPropagation()}>Current PC name: <span className={styles.form__currentName} onClick={(e) => e.stopPropagation()}>{currentName}</span></label>
                    <input type="text" placeholder="Rename PC" id="computer-specs__name" value={newName} onChange={(e) => setNewName(e.target.value)} onClick={(e) => e.stopPropagation()} ref={inputRef}/>
                    <button type="submit" onClick={(e) => e.stopPropagation()}>Rename</button>
                </div>
                <button type="button" aria-label="Close form" className="close" onClick={handleClose}><i className="fa-solid fa-xmark"></i></button>
            </form> }
        </div>
    );
}

export default ComputerSpecs;
