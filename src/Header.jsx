import lumiarelogo from './assets/lumiare.svg'
import IA from './assets/IA.svg'
import styles from './index.module.css'

function Header() {
    return (
        <header className={styles.containerHeader}>
            <div className={styles.lumiareLogoHeader}>
                <img src={lumiarelogo} alt="Lumiare logo" className={styles.lumiareHeader} />
                <img src={IA} alt="IA" className={styles.iaHeader} />
            </div>

            <div className={styles.infoHeader}>
                <p>Solutions</p>
                <p>Pricing</p>
                <p>About us</p>
                <p className={styles.signin}>Sign in</p>
            </div>
        </header>
    )
}

export default Header