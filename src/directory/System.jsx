import styles from '../css/system.module.css';
import '../css/global/universal.css';
import '../assets/fontawesome/css/all.min.css';

import { useState, useRef, useCallback } from 'react';

import TitlePage from '../components/TitlePage';
import ComputerSpecs from '../components/ComputerSpecs';
import UserFeedback from '../components/UserFeedback';

function System() {
      const [showUserFeedback, setShowUserFeedback] = useState(false);
      const [trapFocus, setTrapFocus] = useState(false);
      const lastFocusedRef = useRef(null);
    
      const openDialog = useCallback((trap, e) => {
        lastFocusedRef.current = e.currentTarget;
        setTrapFocus(trap);
        setShowUserFeedback(true);
      }, []);
    
      const closeDialog = useCallback(() => {
        setShowUserFeedback(false);
        if (trapFocus && lastFocusedRef.current) lastFocusedRef.current.focus();
      }, [trapFocus]);
    
      const handleTrigger = e => openDialog(e.detail === 0, e);

    return (
    <main className="wrapper">
        <TitlePage title="System"/>
        <ComputerSpecs />
        <div className={styles["item-container"]}>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-display" aria-hidden="true"></i>
                    <div>
                        <h3>Display</h3>
                        <p>Monitors, brightness, night light, display profile</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-volume-high" aria-hidden="true"></i>
                    <div>
                        <h3>Sound</h3>
                        <p>Volume levels, output, input, sound devices</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-bell" aria-hidden="true"></i>
                    <div>
                        <h3>Notifications</h3>
                        <p>Alerts from apps and system, do not disturb</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-arrows-to-eye" aria-hidden="true"></i>
                    <div>
                        <h3>Focus</h3>
                        <p>Reduce distractions</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-power-off" aria-hidden="true"></i>
                    <div>
                        <h3>Power</h3>
                        <p>Screen and sleep, power mode, energy saver</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-hard-drive" aria-hidden="true"></i>
                    <div>
                        <h3>Storage</h3>
                        <p>Storage space, dirves, configuration rules</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-share-from-square" aria-hidden="true"></i>
                    <div>
                        <h3>Nearby sharing</h3>
                        <p>Discoverability, received files location</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-window-restore" aria-hidden="true"></i>
                    <div>
                        <h3>Multitasking</h3>
                        <p>Snap windows, desktops, task switching</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                    <div>
                        <h3>Activation</h3>
                        <p>Activation state, subscriptions, product key</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-wrench" aria-hidden="true"></i>
                    <div>
                        <h3>Troubleshoot</h3>
                        <p>Recommended troubleshooters, preferences, history</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-rotate-right" aria-hidden="true"></i>
                    <div>
                        <h3>Recovery</h3>
                        <p>Reset, advanced startup, go back</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-clone" aria-hidden="true"></i>
                    <div>
                        <h3>Projecting to this PC</h3>
                        <p>Permissions, pairing PIN, discoverability</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-right-left" aria-hidden="true"></i>
                    <div>
                        <h3>Remote Desktop</h3>
                        <p>Remote Desktop users, connection permissions</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-clipboard" aria-hidden="true"></i>
                    <div>
                        <h3>Clipboard</h3>
                        <p>Cut and copy history, sync, clear</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-rectangle-list" aria-hidden="true"></i>
                    <div>
                        <h3>System components</h3>
                        <p>Manage system components that are preinstalled on Windows</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i>
                    <div>
                        <h3>AI Components</h3>
                        <p>View AI components that are installed on your PC</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-square-plus" aria-hidden="true"></i>
                    <div>
                        <h3>Optional features</h3>
                        <p>Extra functionality for your device</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
                    <div>
                        <h3>About</h3>
                        <p>Device specifications, rename PC, Windows specifications</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
        </div>
        <UserFeedback isOpen={showUserFeedback} trapFocus={trapFocus} onClose={closeDialog} />
    </main>
    )
}

export default System;