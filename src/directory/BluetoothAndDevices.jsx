import styles from '../css/bluetooth-and-devices.module.css';

import TitlePage from '../components/TitlePage';
import UserFeedback from '../components/UserFeedback';

import { useState } from 'react';
import { useFeedback } from '../components/FeedbackDialog';

function BluetoothAndDevices() {
    const { openDialog } = useFeedback();
    const handleTrigger = e => openDialog(e.detail === 0, e);
    const [isOn, setIsOn] = useState(false);
    const handleCheckboxChange = e => setIsOn(e.target.checked);

    return (
        <main className={`wrapper ${styles["independant-style-selector"]}`}>
            <TitlePage title="Bluetooth & Devices" className={styles["bluetooth-title"]}/>
            <div className={styles["content-layout"]}>
                <button className={`${styles["add-device"]} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}><i className="fa-solid fa-plus" aria-hidden="true"></i>Add device</button>
                <button className={`${styles["view-more-devices"]} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>View more devices</button>
                <div className={`${styles["bluetooth-item"]} ${styles.item}`}>
                    <div className={styles.lc}>
                        <i className="fa-brands fa-bluetooth-b" aria-hidden="true"></i>
                        <div>
                            <h3>Bluetooth</h3>
                            <p>Bluetooth is turned <span className={styles["bluetooth-state-tracker"]}>{isOn ? "on" : "off"}</span></p>
                        </div>
                    </div>
                    <form>
                        <label htmlFor='bluetooth-checker' className={styles["bluetooth-state-tracker"]}>{isOn ? "On" : "Off"}</label>
                        <input type="checkbox" id="bluetooth-checker" checked={isOn} onChange={handleCheckboxChange}/>
                    </form>
                </div>
                <div className={styles["item-listing"]}>
                    <button className={`${styles.item} ${styles["open-user-feedback-dialog"]} ${styles["device-item"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                        <i className="fa-solid fa-laptop" aria-hidden="true"></i>
                        <div>
                            <h3>Devices</h3>
                            <p>Mouse, keyboard, pen, audio, displays and docks, other devices</p>
                        </div>
                    </div>
                    <div className={styles.rc}>
                        <span>Add device</span>
                        <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    </div>
                    </button>
                    <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                        <div className={styles.lc}>
                            <i className="fa-solid fa-print" aria-hidden="true"></i>
                             <div>
                                <h3>Printers & scanners</h3>
                                <p>Preferences</p>
                            </div>
                        </div>
                        <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    </button>
                    <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                        <div className={styles.lc}>
                            <i className="fa-solid fa-mobile-screen-button" aria-hidden="true"></i>
                             <div>
                                <h3>Mobile devices</h3>
                                <p>Instantly access your mobile devices from your PC</p>
                            </div>
                        </div>
                        <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    </button>
                    <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                        <div className={styles.lc}>
                            <i className="fa-solid fa-camera" aria-hidden="true"></i>
                             <div>
                                <h3>Cameras</h3>
                                <p>Connected cameras, default image settings</p>
                            </div>
                        </div>
                        <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    </button>
                    <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                        <div className={styles.lc}>
                            <i className="fa-solid fa-computer-mouse" aria-hidden="true"></i>
                             <div>
                                <h3>Mouse</h3>
                                <p>Buttons, mouse pointer speed, scrolling</p>
                            </div>
                        </div>
                        <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    </button>
                    <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                        <div className={styles.lc}>
                            <i className="fa-solid fa-pen" aria-hidden="true"></i>
                             <div>
                                <h3>Pen & Windows Ink</h3>
                                <p>Right-handed or left-handed, pen button shortcuts, handwriting</p>
                            </div>
                        </div>
                        <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    </button>
                    <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                        <div className={styles.lc}>
                            <i className="fa-solid fa-arrows-rotate" aria-hidden="true"></i>
                             <div>
                                <h3>AutoPlay</h3>
                                <p>Defaults for removable drives and memory cards</p>
                            </div>
                        </div>
                        <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    </button>
                    <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                        <div className={styles.lc}>
                            <i className="fa-solid fa-plug" aria-hidden="true"></i>
                             <div>
                                <h3>USB</h3>
                                <p>Notifications, USB battery saver</p>
                            </div>
                        </div>
                        <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <UserFeedback />
        </main>
    );
}

export default BluetoothAndDevices;
