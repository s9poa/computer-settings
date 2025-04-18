import styles from "../css/components/title-page.module.css";

function TitlePage({title}) {
    return (
        <div className={styles.container}>
            <div className={styles["concentrated-left-glow"]}></div>
            <div className={styles["concentrated-right-glow"]}></div>
            <div className={styles["diluted-left-glow"]}></div>
            <div className={styles["diluted-right-glow"]}></div>
            <h1 className={styles.title}>{title}</h1>
        </div>
    )
}

export default TitlePage;