import styles from '../css/personalization.module.css'

import TitlePage from '../components/TitlePage';
import UserFeedback from '../components/UserFeedback';
import { useFeedback } from '../components/FeedbackDialog';

function Personalization() {
    const { openDialog } = useFeedback();
    const handleTrigger = e => openDialog(e.detail === 0, e);

    return(
        <main className="wrapper">
            <TitlePage title="Personalization"/>
            <div className={styles.header}>
                    <div className={styles["image-placeholder"]}>
                    </div>
                    <div>
                        <div className={styles["image-placeholder"]}></div>
                        <div className={styles["image-placeholder"]}></div>
                        <div className={styles["image-placeholder"]}></div>
                        <div className={styles["image-placeholder"]}></div>
                        <div className={styles["image-placeholder"]}></div>
                        <div className={styles["image-placeholder"]}></div>
                    </div>
            </div>
            <div className={styles["item-container"]}>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-image" aria-hidden="true"></i>
                        <div>
                            <h3>Background</h3>
                            <p>Background image, color, slideshow</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-palette" aria-hidden="true"></i>
                        <div>
                            <h3>Colors</h3>
                            <p>Accent color, transparency effects, color theme</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-paintbrush" aria-hidden="true"></i>
                        <div>
                            <h3>Themes</h3>
                            <p>Install, create, manage</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-sun" aria-hidden="true"></i>
                        <div>
                            <h3>Dynamic Lighting</h3>
                            <p>Connected devices, effects, app settings</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-lock" aria-hidden="true"></i>
                        <div>
                            <h3>Lock screen</h3>
                            <p>Lock screen images, apps, animations</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-keyboard" aria-hidden="true"></i>
                        <div>
                            <h3>Text input</h3>
                            <p>Touch keyboard, voice typing, emoji and more, input method editor</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-rotate-right" aria-hidden="true"></i>
                        <div>
                            <h3>Start</h3>
                            <p>Recent apps and items, folders</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-rectangle-list" aria-hidden="true"></i>
                        <div>
                            <h3>Taskbar</h3>
                            <p>Taskbar behaviors, system pins</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-font" aria-hidden="true"></i>
                        <div>
                            <h3>Fonts</h3>
                            <p>Install, manage</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-computer" aria-hidden="true"></i>
                        <div>
                            <h3>Device usage</h3>
                            <p>Select all the ways you plan to use your device to get personalized tips, ads, and reccomendations within Microsoft experiences.</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
            </div>
            <UserFeedback />
        </main>
    );
}

export default Personalization;