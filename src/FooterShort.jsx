import styles from './index.module.css';
import LumiareLogo from './assets/lumiare.svg';
import MaivenLogo from './assets/maiven.png';

function FooterShort() {
    return (
        <footer className={styles.containerFooterShort}>
            <div className={styles.footerContent}>
                <div className={styles.lumiareLogo}>
                    <img src={LumiareLogo} alt="Lumiare" />
                </div>
                
                <div className={styles.infoFooter}>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className={styles.terms}>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>

                <div className={styles.copyright}>
                    © 2024 Lumiare.ai. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default FooterShort;