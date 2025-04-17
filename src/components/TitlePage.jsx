import styles from "../css/components/title-page.module.css";

function TitlePage({title}) {
    return (
        <div className={styles.container}>
            <div className={styles.glow}></div>
            <h1 className={styles.title}>{title}</h1>
        </div>
    )
}

export default TitlePage;