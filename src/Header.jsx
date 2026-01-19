import lumiarelogo from './assets/lumiare.svg'
import IA from './assets/IA.svg'
import styles from './index.module.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className={styles.containerHeader}>
            <div className={styles.lumiareLogoHeader}>
                <img src={lumiarelogo} alt="Lumiare logo" className={styles.lumiareHeader} />
                <img src={IA} alt="IA" className={styles.iaHeader} />
            </div>

            <div className={styles.infoHeader}>
                <Link to="/solutions" className={styles.sol}>Solutions</Link>
                <Link to="/pricing" className={styles.pri}>Pricing</Link>
                <Link to="/about" className={styles.abo}>About us</Link>
                <Link to="/homepage" className={styles.signin}>Sign in</Link>
            </div>
        </header>
    )
}

export default Header