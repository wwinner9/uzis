import styles from '../styles/components/roadfile.module.css'

export default function Roadfile(){
    return(
        <div className={styles.road}>
            <div className={styles.circle}>
                <div className={styles.icon0}></div>
                <div className={styles.icon1}></div>
                <div className={styles.icon2}></div>
                <div className={styles.icon3}></div>
                <div className={styles.icon4}></div>
            </div>
        </div>
    );
}