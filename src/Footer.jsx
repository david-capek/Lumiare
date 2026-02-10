import lumiarelogo from './assets/lumiare.svg'
import IA from './assets/IA.svg'
import Maiven from './assets/Maiven.png'
import { Link } from 'react-router-dom'
import styles from './index.module.css'


function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.lumiareLogo}>
        <a href="/" className={styles.hover}>
        <img src={lumiarelogo} alt="Lumiare logo" className={styles.lumiareBase}/>
        <img src={IA} alt="IA" className={styles.iaLogo}/>
        </a>
        <p className={styles.createdBy}>Created by</p>
        <a href="https://www.maiven.io/">
        <img src={Maiven} alt="" className={styles.maivenImage}/>
        </a>
      </div>

      <p className={styles.copyright}>
        © Lumiare™ 2025. All Rights Reserved.
      </p>

      <div className={styles.infoFooter}>
        <Link to="/" className={styles.home}>Home</Link>
        <Link to="/solutions" className={styles.sol}>Solutions</Link>
        <Link to="/pricing" className={styles.pri}>Pricing</Link>
        <Link to="/about" className={styles.abo}>About us</Link>
        <Link to="/contact" className={styles.con}>Contact</Link>
      </div>

      <div className={styles.terms}>
        <p>Privacy policy</p>
        <p>Terms</p>
      </div>
    </footer>
  )
}

export default Footer