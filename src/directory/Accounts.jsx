import styles from '../css/accounts.module.css';

import TitlePage from '../components/TitlePage';
import UserFeedback from '../components/UserFeedback';
import { useFeedback } from '../components/FeedbackDialog';

function Accounts() {
    const { openDialog } = useFeedback();
    const handleTrigger = e => openDialog(e.detail === 0, e);

    return (
        <main className="wrapper">
            <TitlePage title="Apps"/>
            <div className={styles.header}>
            </div>
            <div className={styles["item-container"]}>
            </div>
            <UserFeedback />
        </main>
    )
}

export default Accounts;