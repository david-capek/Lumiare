import lumiarelogo from './assets/lumiare.svg'
import IA from './assets/IA.svg'
import Maiven from './assets/Maiven.png'
import { Link } from 'react-router-dom'
import styles from './index.module.css'


function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.lumiareLogo}>
        <img
          src={lumiarelogo}
          alt="Lumiare logo"
          className={styles.lumiareBase}
        />
        <img
          src={IA}
          alt="IA"
          className={styles.iaLogo}
        />
        <p className={styles.createdBy}>Created by</p>
        <img
          src={Maiven}
          alt=""
          className={styles.maivenImage}
        />
      </div>

      <p className={styles.copyright}>
        © Lumiare™ 2025. All Rights Reserved.
      </p>

      <div className={styles.infoFooter}>
        <Link to="/">Home</Link>
        <Link to="/solutions">Solutions</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className={styles.terms}>
        <p>Privacy policy</p>
        <p>Terms</p>
      </div>
    </footer>
  )
}

export default Footer