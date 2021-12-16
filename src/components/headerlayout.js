import styles from '../styles/components/headerlayout.module.css'

export default function headerlayout({children}){
    return (
        <>
            <header className={styles.header}>
                <div className={styles.leftSide}>                    
                    <img 
                        src="/avatar.jpg" 
                        id={styles.avatar} 
                        alt="avatar" 
                    />
                    <div className={styles.logo}>
                        <p>a</p>
                        <h1>UZIS</h1>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <button
                        id={styles.btnAbout}
                    >
                        About
                    </button>
                </div>
            </header>
            {children}
        </>
       
    );
} 