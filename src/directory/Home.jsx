import { useState, useRef, useCallback } from 'react';
import styles from '../css/home.module.css';
import '../css/global/universal.css';
import '../assets/fontawesome/css/all.min.css';

import TitlePage from '../components/TitlePage';
import ComputerSpecs from '../components/ComputerSpecs';
import UserFeedback from '../components/UserFeedback';

import { Link } from 'react-router';

function Home() {
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
      <TitlePage title="Home"/>
      <ComputerSpecs />
      <div className={styles.grid}>
        <div className={styles.lc}>
          {/* Item 1 */}
          <div className={`${styles["item-container"]} ${styles.one}`}>
            <div className={styles.header}>
              <h3>Recommended settings</h3>
              <p>Recent and commonly used settings</p>
            </div>
            <Link to="/computer-settings/apps">
              <div><i className="fa-solid fa-list" aria-hidden="true"></i><span>Installed Apps</span></div>
              <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </Link>
            <Link to="/computer-settings/apps">
              <div><i className="fa-brands fa-medapps" aria-hidden="true"></i><span>Default Apps</span></div>
              <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </Link>
            <Link to="/computer-settings/system">
              <div><i className="fa-solid fa-volume-high" aria-hidden="true"></i><span>Sound</span></div>
              <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </Link>
          </div>
          {/* Item 2 */}
          <div className={`${styles["item-container"]} ${styles.two}`}>
            <i className="fa-solid fa-shield" aria-hidden="true"></i>
            <div>
              <h3>Never lose access to your account</h3>
              <p>Add a recovery phone number to make sure you can always get into you account</p>
            </div>
            <button type="button" className="open-user-feedback-dialog" onClick={handleTrigger}>Add now</button>
          </div>
          {/* Item 3 */}
          <div className={`${styles["item-container"]} ${styles.three}`}>
            <h3>Personalize your device</h3>
            <div className={styles["img-grid"]}>
              <div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
            <div className={styles["color-mode"]}>
              <div><i className="fa-solid fa-palette" aria-hidden="true"></i><label htmlFor="home__color-mode">Color Mode</label></div>
              <select id="home__color-mode"><option>Dark</option><option>Light</option></select>
            </div>
            <Link to="/computer-settings/personalization" className={styles["browse-personalization"]}><span>Browse more backgrounds, colors, and themes</span><i className="fa-solid fa-chevron-right" aria-hidden="true"></i></Link>
          </div>
        </div>
        <div className={styles.rc}>
          {/* Item 4 */}
          <div className={`${styles["item-container"]} ${styles.four}`}>
            <i className="fa-brands fa-microsoft"></i>
            <div>
              <h3>Get more out of Microsoft 365</h3>
              <p>Experience desktop versions of apps like Word and PowerPoint with AI built in, up to 6 TB of cloud storage to share, advanced security, and more, all in one convenient subscription.</p>
            </div>
            <div className={styles.row}>
              <i className="fa-solid fa-file-word"></i><i className="fa-solid fa-file-excel"></i><i className="fa-solid fa-file-powerpoint"></i><i className="fa-solid fa-file-outlook"></i>
            </div>
            <button type="button" className="open-user-feedback-dialog" onClick={handleTrigger}>Get Microsoft 365</button>
          </div>
          {/* Item 5 */}
          <div className={`${styles["item-container"]} ${styles.five}`}>
            <i className="fa-brands fa-xbox" aria-hidden="true"></i>
            <div>
              <h3>Discover your next favorite game</h3>
              <p>Play hundreds of high-quality PC games with friends, including new day one titles like Call of Duty: Black Ops 6</p>
            </div>
            <button type="button" className="open-user-feedback-dialog" onClick={handleTrigger}>Join Game Pass</button>
          </div>
          {/* Item 6 */}
          <div className={`${styles["item-container"]} ${styles.six}`}>
            <i className="fa-solid fa-cloud" aria-hidden="true"></i>
            <div>
              <h3>Cloud Storage</h3>
              <p>Make sure you're signed in with email@address.com so you can see you storage details here</p>
            </div>
            <button type="button" className="open-user-feedback-dialog" onClick={handleTrigger}>Sign in to OneDrive</button>
          </div>
        </div>
      </div>
      <div className={styles["help-directions"]}>
        <button type="button"><i className="fa-solid fa-comments" aria-hidden="true"></i><span>Get help</span></button>
        <button type="button"><i className="fa-solid fa-message" aria-hidden="true"></i><span>Get feedback</span></button>
      </div>
      <UserFeedback isOpen={showUserFeedback} trapFocus={trapFocus} onClose={closeDialog} />
    </main>
  );
}

export default Home;
