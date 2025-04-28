import styles from '../css/accessibility.module.css';

import TitlePage from '../components/TitlePage';
import UserFeedback from '../components/UserFeedback';
import { useFeedback } from '../components/FeedbackDialog';

function Accessbility() {
    const { openDialog } = useFeedback();
    const handleTrigger = e => openDialog(e.detail === 0, e);

    return (
        <main className="wrapper">
            <TitlePage title="Accessibility"/>
            <div className={styles["item-container"]}>
                <h3>Vision</h3>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-a" aria-hidden="true"></i>
                        <div>
                            <h3>Font size</h3>
                            <p>Text size that appears throughout Windows and your apps</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-wand-sparkles" aria-hidden="true"></i>
                        <div>
                            <h3>Visual effects</h3>
                            <p>Scroll bars, transparency, animations, notification timeout</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-arrow-pointer" aria-hidden="true"></i>
                        <div>
                            <h3>Mouse pointer and touch</h3>
                            <p>Mouse pointer color, size</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-i-cursor" aria-hidden="true"></i>
                        <div>
                            <h3>Text cursor</h3>
                            <p>Appearance and thickness, text cursor indicator</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                        <div>
                            <h3>Magnifier</h3>
                            <p>Magnifier reading, zoom increment</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-palette" aria-hidden="true"></i>
                        <div>
                            <h3>Color filters</h3>
                            <p>Colorblindness filters, grayscale, inverted</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-circle-half-stroke" aria-hidden="true"></i>
                        <div>
                            <h3>Contrast themes</h3>
                            <p>Color themes for low vision, light sensitivity</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-audio-description" aria-hidden="true"></i>
                        <div>
                            <h3>Narrator</h3>
                            <p>Voice, verbosity, keyboard, braille</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
            </div>
            <div className={styles["item-container"]}>
                <h3>Hearing</h3>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-volume-high" aria-hidden="true"></i>
                        <div>
                            <h3>Audio</h3>
                            <p>Mono audio, audio notifications</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-ear-listen" aria-hidden="true"></i>
                        <div>
                            <h3>Hearing devices</h3>
                            <p>Presets, enviroment sound control, audio routing</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-closed-captioning" aria-hidden="true"></i>
                        <div>
                            <h3>Captions</h3>
                            <p>Styles, live captions</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
            </div>
            <div className={styles["item-container"]}>
                <h3>Interacting</h3>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-volume-high" aria-hidden="true"></i>
                        <div>
                            <h3>Speech</h3>
                            <p>Voice access, voice typing</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-keyboard" aria-hidden="true"></i>
                        <div>
                            <h3>Keyboard</h3>
                            <p>Sticky, Filter, and Toggle-keys, on-screen keyboard</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-mouse" aria-hidden="true"></i>
                        <div>
                            <h3>Mouse</h3>
                            <p>Mouse keys, speed, acceleration</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-eye" aria-hidden="true"></i>
                        <div>
                            <h3>Eye control</h3>
                            <p>Eye tracker, text-to-speech</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
            </div>
            <UserFeedback />
        </main>
    )
}

export default Accessbility;