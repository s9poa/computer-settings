import styles from '../css/windows-update.module.css';

import TitlePage from '../components/TitlePage';
import UserFeedback from '../components/UserFeedback';
import { useFeedback } from '../components/FeedbackDialog';

function WindowsUpdate() {
    const { openDialog } = useFeedback();
    const handleTrigger = e => openDialog(e.detail === 0, e);

    return (
        <main className="wrapper">
            <TitlePage title="Accounts"/>
            <div className={styles.header}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-arrows-rotate" aria-hidden="true"></i>
                    <div>
                        <h2>You're up to date</h2>
                        <span>Last checked: Today, 10:32 AM</span>
                    </div>
                </div>
                <div className={styles.rc}>
                    <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                        Check for updates
                    </button>
                </div>
            </div>
            <div className={styles["item-container"]}>
                <h3>More options</h3>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-volume-off" aria-hidden="true"></i>
                        <div>
                            <h3>Get the latest updates as soon as they're available</h3>
                            <p>Be among the first to get the non-security updates, fixes, and improvements as they roll out.</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-pause" aria-hidden="true"></i>
                        <div>
                            <h3>Pause</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-clock-rotate-left" aria-hidden="true"></i>
                        <div>
                            <h3>Update history</h3>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-gears" aria-hidden="true"></i>
                        <div>
                            <h3>Advanced options</h3>
                            <p>Delivery optimization, optional updates, active hourse, other update settings</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-users" aria-hidden="true"></i>
                        <div>
                            <h3>Windows Insider Program</h3>
                            <p>Get preview builds of Windows to share feedback on new features and updates</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
            </div>
            <div className={styles["help-directions"]}>
                <button className="open-user-feedback-dialog" onClick={handleTrigger}><i className="fa-solid fa-comments" aria-hidden="true"></i><span>Get help</span></button>
                <button className="open-user-feedback-dialog" onClick={handleTrigger}><i className="fa-solid fa-message" aria-hidden="true"></i><span>Get feedback</span></button>
            </div>
            <UserFeedback />
        </main>
    )
}

export default WindowsUpdate;