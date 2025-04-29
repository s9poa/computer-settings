import styles from '../css/privacy-and-security.module.css';

import TitlePage from '../components/TitlePage';
import UserFeedback from '../components/UserFeedback';
import { useFeedback } from '../components/FeedbackDialog';

function PrivacyAndSecurity() {
    const { openDialog } = useFeedback();
    const handleTrigger = e => openDialog(e.detail === 0, e);

    return (
        <main className="wrapper">
            <TitlePage title="Privacy & Security"/>
            <div className={styles["item-container"]}>
                <h3>Security</h3>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-shield" aria-hidden="true"></i>
                        <div>
                            <h3>Windows Security</h3>
                            <p>Anitvirus, browser, firewall, and network protection for your device</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-map-location-dot" aria-hidden="true"></i>
                        <div>
                            <h3>Find my device</h3>
                            <p>Track your device if you tink you've lost it</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-lock" aria-hidden="true"></i>
                        <div>
                            <h3>Device encryption</h3>
                            <p>Help protect your files from unauthorized access</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
            </div>

            <div className={styles["item-container"]}>
                <h3>Windows permissions</h3>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-lock" aria-hidden="true"></i>
                        <div>
                            <h3>General</h3>
                            <p>Advertising ID, local content, app launches, settings suggestions, productivity tools</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-volume-high" aria-hidden="true"></i>
                        <div>
                            <h3>Speech</h3>
                            <p>Online speech recognition for dictation and other voice-based interactions</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-list-check" aria-hidden="true"></i>
                        <div>
                            <h3>Inking & typing personalization</h3>
                            <p>Custom dictionary, words in your dictionary</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-arrow-trend-up" aria-hidden="true"></i>
                        <div>
                            <h3>Diagnostics & feedback</h3>
                            <p>Diagnostics data, inking and typing data, tailored experiences, feedback frequency</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-rotate-right" aria-hidden="true"></i>
                        <div>
                            <h3>Activity history</h3>
                            <p>Options for managing your activity history on this device</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-file-shield" aria-hidden="true"></i>
                        <div>
                            <h3>Search permissions</h3>
                            <p>SafeSearch, cloud content search, search history</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                        <div>
                            <h3>Searching Windows</h3>
                            <p>Search indexing for faster results, Find My Files, folders excluded from search</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
            </div>

            <div className={styles["item-container"]}>
                <h3>App permissions</h3>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-location-arrow" aria-hidden="true"></i>
                        <div>
                            <h3>Location</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-camera" aria-hidden="true"></i>
                        <div>
                            <h3>Camera</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-microphone" aria-hidden="true"></i>
                        <div>
                            <h3>Microphone</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-microphone-lines" aria-hidden="true"></i>
                        <div>
                            <h3>Voice activation</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-bell" aria-hidden="true"></i>
                        <div>
                            <h3>Notifications</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-user-gear" aria-hidden="true"></i>
                        <div>
                            <h3>Account info</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-user-group" aria-hidden="true"></i>
                        <div>
                            <h3>Contacts</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-calendar" aria-hidden="true"></i>
                        <div>
                            <h3>Calendar</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-phone" aria-hidden="true"></i>
                        <div>
                            <h3>Phone calls</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-rotate-left" aria-hidden="true"></i>
                        <div>
                            <h3>Call hisotry</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                        <div>
                            <h3>Email</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-list-check" aria-hidden="true"></i>
                        <div>
                            <h3>Tasks</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-comment" aria-hidden="true"></i>
                        <div>
                            <h3>Messaging</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-tower-cell" aria-hidden="true"></i>
                        <div>
                            <h3>Radios</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-mobile-screen-button" aria-hidden="true"></i>
                        <div>
                            <h3>Other devices</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-chart-column" aria-hidden="true"></i>
                        <div>
                            <h3>App diagnostics</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-cloud" aria-hidden="true"></i>
                        <div>
                            <h3>Automatic file downloads</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-file" aria-hidden="true"></i>
                        <div>
                            <h3>Documents</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-folder" aria-hidden="true"></i>
                        <div>
                            <h3>Downloads folder</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-music" aria-hidden="true"></i>
                        <div>
                            <h3>Music library</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-image" aria-hidden="true"></i>
                        <div>
                            <h3>Pictures</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-film" aria-hidden="true"></i>
                        <div>
                            <h3>Videos</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-file" aria-hidden="true"></i>
                        <div>
                            <h3>File system</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-image" aria-hidden="true"></i>
                        <div>
                            <h3>Screenshot borders</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-photo-film" aria-hidden="true"></i>
                        <div>
                            <h3>Screenshots and screen recording</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
            </div>
            <UserFeedback />
        </main>
    )
}

export default PrivacyAndSecurity;