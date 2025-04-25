import styles from '../css/accounts.module.css';

import TitlePage from '../components/TitlePage';
import UserFeedback from '../components/UserFeedback';
import { useFeedback } from '../components/FeedbackDialog';

function Accounts() {
    const { openDialog } = useFeedback();
    const handleTrigger = e => openDialog(e.detail === 0, e);

    return (
        <main className="wrapper">
            <TitlePage title="Accounts"/>
            <div className={styles.header}>
                <div className={styles.lc}>
                    <i className="fa-solid fa-circle-user" aria-hidden="true"></i>
                    <div>
                        <h2>username</h2>
                        <span>user@address.com</span>
                        <span>Administrator</span>
                    </div>
                </div>
                <div className={styles.rc}>
                    <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                        <i className="fa-solid fa-medal" aria-hidden="true"></i>
                        <div>
                            <h3>Rewards</h3>
                            <span>300 points</span>
                        </div>
                    </button>
                    <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                        <i className="fa-solid fa-cloud" aria-hidden="true"></i>
                        <div>
                            <h3>One Drive</h3>
                            <span><i className="fa-solid fa-circle" aria-hidden="true"></i>Sign in</span>
                        </div>
                    </button>
                </div>
            </div>
            <div className={styles["item-container"]}>
                <h3>Account settings</h3>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-chalkboard-user" aria-hidden="true"></i>
                        <div>
                            <h3>Your info</h3>
                            <p>Profile photo</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-key" aria-hidden="true"></i>
                        <div>
                            <h3>Sign-in options</h3>
                            <p>Windows Hello, security key, password, dynamic lock</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-house-laptop" aria-hidden="true"></i>
                        <div>
                            <h3>Linked devices</h3>
                            <p>Find, repair, and manage devices that are signed in with your Microsoft account</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                        <div>
                            <h3>Email & accounts</h3>
                            <p>Accounts used by email, calendar, and contacts</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-hand-holding-heart" aria-hidden="true"></i>
                        <div>
                            <h3>Family</h3>
                            <p>Managed your family group, edit account types and device permissions</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-window-restore" aria-hidden="true"></i>
                        <div>
                            <h3>Windows backup</h3>
                            <p>Back up your files, apps, preferences to restore them across devices</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-users" aria-hidden="true"></i>
                        <div>
                            <h3>Other users</h3>
                            <p>Device access, work or school users, kiosk assigned access</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-briefcase" aria-hidden="true"></i>
                        <div>
                            <h3>Access work or school</h3>
                            <p>Organization resources like email, apps, and network</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-person-chalkboard" aria-hidden="true"></i>
                        <div>
                            <h3>Passkeys</h3>
                            <p>Use your face, fingerprint, or PIN to sig in to apps and websites</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
            </div>
            <div className={styles["item-container"]}>
                <h3>Related settings</h3>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-shield" aria-hidden="true"></i>
                        <div>
                            <h3>Account privacy</h3>
                            <p>View your privacy dashboard and manage activity data</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-up-right-from-square" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-arrows-turn-to-dots" aria-hidden="true"></i>
                        <div>
                            <h3>Subscriptions</h3>
                            <p>Manage services and subscriptions from Microsoft</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-up-right-from-square" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-medal" aria-hidden="true"></i>
                        <div>
                            <h3>Rewards</h3>
                            <p>Earn and redeem points for using your favorite services and more</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-up-right-from-square" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-credit-card" aria-hidden="true"></i>
                        <div>
                            <h3>Payment options</h3>
                            <p>Manage how you pay for your purchases with your Microsoft account</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-up-right-from-square" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-clock-rotate-left" aria-hidden="true"></i>
                        <div>
                            <h3>Order history</h3>
                            <p>View recent purchases made with your Microsoft account</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-up-right-from-square" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                    <i className="fa-solid fa-clock-rotate-left" aria-hidden="true"></i>
                        <div>
                            <h3>Account & billing help</h3>
                            <p>Get surrport for subscriptions, payments, and billing</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-up-right-from-square" aria-hidden="true"></i>
                </button>
            </div>
            <div className={styles["help-directions"]}>
                <button className="open-user-feedback-dialog" onClick={handleTrigger}><i className="fa-solid fa-comments" aria-hidden="true"></i><span>Get help</span></button>
            </div>
            <UserFeedback />
        </main>
    )
}

export default Accounts;