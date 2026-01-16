import Lumiare from './assets/lumiare.svg'
import IA from './assets/IA.svg'
import styles from './index.module.css'

export default function Header2() {
    return (
        <header className={styles.containerHeader2Main}>
            <div className={styles.containerHeader2}>
                <img src={Lumiare} alt='Logo' className={styles.lumiareImg} />
                <img src={IA} alt='Logo' className={styles.iaLogo2} />
            </div>

            <div className={styles.infoHeader2}>
                <p style={{ fontWeight: "600" }}>Solutions</p>
                <p>Pricing</p>
                <p>About Us</p>
                <p className={styles.signin2}>Sign in</p>
                <p className={styles.demo}>Request a demo</p>
            </div>
        </header>
    )
}