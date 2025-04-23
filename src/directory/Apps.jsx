import styles from '../css/personalization.module.css'

import TitlePage from '../components/TitlePage';
import UserFeedback from '../components/UserFeedback';
import { useFeedback } from '../components/FeedbackDialog';

function Apps () {
    const { openDialog } = useFeedback();
    const handleTrigger = e => openDialog(e.detail === 0, e);

    return (
        <main className="wrapper">
            <TitlePage title="Apps"/>
            <div className={styles["item-container"]}>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                <i className="fa-solid fa-list" aria-hidden="true"></i>
                    <div>
                        <h3>Installed apps</h3>
                        <p>Uninstall and manage apps on your PC</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                <i className="fa-solid fa-square-poll-horizontal" aria-hidden="true"></i>
                    <div>
                        <h3>Advanced app settings</h3>
                        <p>Choose where to get apps, archive apps, uninstall updates</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                <i className="fa-solid fa-check-to-slot" aria-hidden="true"></i>
                    <div>
                        <h3>Default apps</h3>
                        <p>Defaults for file and link types, other defaults</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                <i className="fa-solid fa-ranking-star" aria-hidden="true"></i>
                    <div>
                        <h3>Actions</h3>
                        <p>Windows can recommend actions from these apps</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                <i className="fa-solid fa-map" aria-hidden="true"></i>
                    <div>
                        <h3>Offline maps</h3>
                        <p>Downloads, storage location, map updates</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                    <div>
                        <h3>Apps for websites</h3>
                        <p>Websites that can open in an app instead of a browser</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                <i className="fa-solid fa-video" aria-hidden="true"></i>
                    <div>
                        <h3>Video playback</h3>
                        <p>Video adjustments, HDR streaming, battery options</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                <i className="fa-solid fa-square-caret-up" aria-hidden="true"></i>
                    <div>
                        <h3>Startup</h3>
                        <p>Apps that start automatically when you sign in</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
            </div>
            <UserFeedback />
        </main>
    )
}

export default Apps;