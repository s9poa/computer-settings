import { useState, useEffect } from 'react';
import styles from '../css/time-and-language.module.css';
import TitlePage from '../components/TitlePage';
import UserFeedback from '../components/UserFeedback';
import { useFeedback } from '../components/FeedbackDialog';

function TimeAndLanguage() {
    const { openDialog } = useFeedback();
    const handleTrigger = e => openDialog(e.detail === 0, e);

    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [currentTimeZone, setCurrentTimeZone] = useState('');
    const [currentRegion, setCurrentRegion] = useState('');

    useEffect(() => {
        const pad2 = n => String(n).padStart(2, '0');
        const getOrdinal = n => {
            const s = ['th','st','nd','rd'];
            const v = n % 100;
            return n + (s[(v - 20) % 10] || s[v] || s[0]);
        };

        const updateDateTime = () => {
            const now = new Date();

            // Time (e.g. "3:45 PM")
            setCurrentTime(
                now.toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric', hour12: true })
            );

            // Date with ordinal (e.g. "Monday, April 1st, 2025")
            const weekday = now.toLocaleDateString(undefined, { weekday: 'long' });
            const month   = now.toLocaleDateString(undefined, { month: 'long' });
            const day     = now.getDate();
            const year    = now.getFullYear();
            setCurrentDate(`${weekday}, ${month} ${getOrdinal(day)}, ${year}`);

            // Time zone offset and IANA name (e.g. "(UTC-04:00) America/New_York")
            const offset = now.getTimezoneOffset();
            const sign   = offset > 0 ? '-' : '+';
            const absMin = Math.abs(offset);
            const h      = pad2(Math.floor(absMin / 60));
            const m      = pad2(absMin % 60);
            const tzName = Intl.DateTimeFormat().resolvedOptions().timeZone;
            setCurrentTimeZone(`(UTC${sign}${h}:${m}) ${tzName}`);

            // Region name from browser locale (e.g. "United States")
            const locale     = navigator.language;
            const regionCode = locale.split('-')[1] || '';
            const regionName = regionCode
                ? new Intl.DisplayNames([locale], { type: 'region' }).of(regionCode)
                : locale;
            setCurrentRegion(regionName);
        };

        updateDateTime();
        const timer = setInterval(updateDateTime, 60000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="wrapper">
            <TitlePage title="Time & Language"/>
            <div className={styles.header}>
                <div className={styles.lc}>
                    <div>
                        <h2 className={styles["current-time"]}>{currentTime}</h2>
                        <span className={styles["current-date"]}>{currentDate}</span>
                    </div>
                </div>
                <div className={styles.rc}>
                    <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                        <i className="fa-solid fa-clock" aria-hidden="true"></i>
                        <div>
                            <h3>Time zone</h3>
                            <span className={styles["current-time-zone"]}>{currentTimeZone}</span>
                        </div>
                    </button>
                    <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                        <i className="fa-solid fa-globe" aria-hidden="true"></i>
                        <div>
                            <h3>Region</h3>
                            <span className={styles["current-region"]}>{currentRegion}</span>
                        </div>
                    </button>
                </div>
            </div>
            <div className={styles["item-container"]}>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                        <i className="fa-solid fa-calendar" aria-hidden="true"></i>
                        <div>
                            <h3>Date & time</h3>
                            <p>Time zones, automatic clock settings, calendar display</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                        <i className="fa-solid fa-globe" aria-hidden="true"></i>
                        <div>
                            <h3>Language & region</h3>
                            <p>Windows display language, preferred languages, regional formats</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                        <i className="fa-solid fa-keyboard" aria-hidden="true"></i>
                        <div>
                            <h3>Typing</h3>
                            <p>Touch keyboard, text suggestions, preferences</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className={`${styles.item} ${styles["open-user-feedback-dialog"]}`} onClick={handleTrigger}>
                    <div className={styles.lc}>
                        <i className="fa-solid fa-microphone" aria-hidden="true"></i>
                        <div>
                            <h3>Speech</h3>
                            <p>Speech language, speech recognition microphone setup, voices</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
            </div>
            <UserFeedback />
        </main>
    )
}

export default TimeAndLanguage;
