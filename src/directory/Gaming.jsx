import styles from '../css/gaming.module.css';
import '../css/global/universal.css';
import '../assets/fontawesome/css/all.min.css';

import TitlePage from '../components/TitlePage';
import { useFeedback } from '../components/FeedbackDialog';

function Gaming() {
      const { openDialog } = useFeedback();
      const handleTrigger = e => openDialog(e.detail === 0, e);

    return (
    <main className="wrapper">
        <TitlePage title="Gaming"/>
        <div className={styles["item-container"]}>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-dice-d6" aria-hidden="true"></i>
                    <div>
                        <h3>Game Bar</h3>
                        <p>Controller and keyboard shortcuts</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-photo-film" aria-hidden="true"></i>
                    <div>
                        <h3>Captures</h3>
                        <p>Save locations, recording preferences</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
            <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-gamepad" aria-hidden="true"></i>
                    <div>
                        <h3>Game Mode</h3>
                        <p>Optimize your PC for play</p>
                    </div>
                </div>
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
        </div>
    </main>
    )
}

export default Gaming;
