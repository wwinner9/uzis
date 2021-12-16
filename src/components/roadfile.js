import styles from '../styles/components/roadfile.module.css'
import {FaFile,BiFile , FiVideo, FiImage, FiMusic , FaTasks} from 'react-icons/all'


export default function Roadfile(){
    return(
        <div className={styles.road}>
            <div className={styles.circle}>
                <div className={styles.icon0}><a href=""><BiFile/></a></div>
                <div className={styles.icon1}><a href=""><FiVideo/></a></div>
                <div className={styles.icon2}><a href=""><FiImage/></a></div>
                <div className={styles.icon3}><a href=""><FiMusic/></a></div>
                <div className={styles.icon4}><a href=""><FaTasks/></a></div>
            </div>
        </div>
    );
}