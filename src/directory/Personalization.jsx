import styles from '../css/personalization.module.css'

import TitlePage from '../components/TitlePage';

function Personalization() {
    return(
        <main className="wrapper">
            <TitlePage title="Personalization"/>
            <div className={styles["item-container"]}>
            </div>
        </main>
    );
}

export default Personalization;