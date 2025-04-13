import styles from '../css/home.module.css';
import '../css/global/universal.css';
import '../assets/fontawesome/css/all.min.css';

import TitlePage from '../components/TitlePage';
import ComputerSpecs from '../components/ComputerSpecs';

import { Link } from 'react-router';


function Home() {

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
            <Link to="/apps">
              <div>
              <i className="fa-solid fa-list" aria-hidden="true"></i>
                <span>Installed Apps</span>
              </div>
              <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </Link>
            <Link to="/apps">
              <div>
                <i className="fa-brands fa-medapps" aria-hidden="true"></i>
                <span>Default Apps</span>
              </div>
              <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </Link>
            <Link to="/system">
              <div>
              <i className="fa-solid fa-volume-high" aria-hidden="true"></i>
                <span>Sound</span>
              </div>
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
            <button>Add now</button>
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
                <i className="fa-solid fa-file-word"></i>
                <i className="fa-solid fa-file-excel"></i>
                <i className="fa-solid fa-file-powerpoint"></i>
                <i className="fa-solid fa-file-outlook"></i>
              </div>
              <button>Get Microsoft 365</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;
