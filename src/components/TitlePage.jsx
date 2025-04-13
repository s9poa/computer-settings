import styles from "../css/components/title-page.module.css";

function TitlePage({title}) {
    return (
        <h1 className={styles.title}>{title}</h1>
    )
}

export default TitlePage;