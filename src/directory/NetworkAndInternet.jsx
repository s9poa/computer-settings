import styles from '../css/network-and-internet.module.css';

import TitlePage from '../components/TitlePage';
import UserFeedback from '../components/UserFeedback';

import { useFeedback } from '../components/FeedbackDialog';
import { useState } from 'react';

function NetworkAndInternet() {
    const { openDialog } = useFeedback();
    const handleTrigger = e => openDialog(e.detail === 0, e);
    const [wifiOn, setWifiOn] = useState(false);
    const [hotspotOn, setHotspotOn] = useState(false);
    const [airplaneOn, setAirplaneOn] = useState(false);
    const handleWifiChange = e => setWifiOn(e.target.checked);
    const handleHotspotChange = e => setHotspotOn(e.target.checked);
    const handleAirplaneChange = e => setAirplaneOn(e.target.checked);

    return (
        <main className={`wrapper ${styles["independant-style-selector"]}`}>
            <TitlePage title="Network & Internet"/>
            <div className={styles.header}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-wifi" aria-hidden="true"></i>
                    <div>
                        <h2>Wi-Fi (Bubble Gum Kingdom)</h2>
                        <span><i className="fa-solid fa-globe" aria-hidden="true"></i> Connected, secured</span>
                    </div>
                </div>
                <div className={styles.rc}>
                    <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                        <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
                        <div>
                            <h3>Properties</h3>
                            <span>Private network <br/>5GHz</span>
                        </div>
                    </button>
                    <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                        <i className="fa-solid fa-chart-pie" aria-hidden="true"></i>
                        <div>
                            <h3>Data usage</h3>
                            <span>180.81 GB, last 30 days</span>
                        </div>
                    </button>
                </div>
            </div>
            <div className={styles["item-listing"]}>
                <div className={`${styles["bluetooth-item"]} ${styles.item}`}>
                    <div className={styles.lc}>
                        <i className="fa-solid fa-wifi" aria-hidden="true"></i>
                        <div>
                            <h3>Wi-Fi</h3>
                            <p>Connect, manage known networks, metered network</p>
                        </div>
                    </div>
                    <form>
                        <label htmlFor='wifi-checker' className={styles["item-state-tracker"]}>{wifiOn ? "On" : "Off"}</label>
                        <input type="checkbox" id="wifi-checker" checked={wifiOn} onChange={handleWifiChange}/>
                    </form>
                </div>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                        <i className="fa-solid fa-ethernet" aria-hidden="true"></i>
                        <div>
                            <h3>Ethernet</h3>
                            <p>Authentication, IP and DNS settings, metered netowork</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                        <i className="fa-solid fa-shield" aria-hidden="true"></i>
                        <div>
                            <h3>VPN</h3>
                            <p>Add, connect, manage</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <div className={`${styles["bluetooth-item"]} ${styles.item}`}>
                    <div className={styles.lc}>
                        <i className="fa-solid fa-tower-broadcast" aria-hidden="true"></i>
                        <div>
                            <h3>Mobile hotspot</h3>
                            <p>Share your internet connection</p>
                        </div>
                    </div>
                    <form>
                        <label htmlFor='mobile-hotspot-checker' className={styles["item-state-tracker"]}>{hotspotOn ? "On" : "Off"}</label>
                        <input type="checkbox" id="mobile-hotspot-checker" checked={hotspotOn} onChange={handleHotspotChange}/>
                    </form>
                </div>
                <div className={`${styles["bluetooth-item"]} ${styles.item}`}>
                    <div className={styles.lc}>
                        <i className="fa-solid fa-plane" aria-hidden="true"></i>
                        <div>
                            <h3>Airplane mode</h3>
                            <p>Stop wireless connection</p>
                        </div>
                    </div>
                    <form>
                        <label htmlFor='airplane-mode-checker' className={styles["item-state-tracker"]}>{airplaneOn ? "On" : "Off"}</label>
                        <input type="checkbox" id="airplane-mode-checker" checked={airplaneOn} onChange={handleAirplaneChange}/>
                    </form>
                </div>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                        <i className="fa-solid fa-satellite-dish" aria-hidden="true"></i>
                        <div>
                            <h3>Proxy</h3>
                            <p>Proxy server for Wi-Fi and Ethernet connections</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                        <i className="fa-solid fa-phone" aria-hidden="true"></i>
                        <div>
                            <h3>Dial-up</h3>
                            <p>Set up a dial-up internet connection</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                        <i className="fa-solid fa-network-wired" aria-hidden="true"></i>
                        <div>
                            <h3>Advanced network settings</h3>
                            <p>View all network adapters, network reset</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
            </div>
            <UserFeedback />
        </main>
    );
}

export default NetworkAndInternet;
