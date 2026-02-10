import Lumiare from './assets/lumiare.svg'
import IA from './assets/IA.svg'
import styles from './index.module.css'
import { Link } from "react-router-dom";

export default function Header2() {
    return (
        <header className={styles.containerHeader2Main}>
            <div className={styles.containerHeader2}>
                <img src={Lumiare} alt='Logo' className={styles.lumiareImg} />
                <img src={IA} alt='Logo' className={styles.iaLogo2} />
            </div>

            <div className={styles.infoHeader2}>
                <Link to="/solutions" className={styles.sol} style={{ fontWeight: 600 }}>Solutions</Link>
                <Link to="/pricing" className={styles.pri}>Pricing</Link>
                <Link to="/about" className={styles.abo}>About us</Link>
                <Link to="/homepage" className={styles.signin}>Sign in</Link>
                <Link to="/homepage" className={styles.requestDemo}>Request a demo</Link>
            </div>
        </header>
    )
}