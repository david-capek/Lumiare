import Rocket from './assets/rocket.svg';
import Star1 from './assets/star1.svg';
import Star2 from './assets/star2.svg';
import styles from './index.module.css';

function Waitlist() {
    return (
        <div className={styles.containerWaitlist}>
            <img src={Rocket} alt="Rocket" className={styles.rocketImage} />

            <div className={styles.ellipse}>
                <div className={styles.e1}></div>
                <div className={styles.e2}></div>
                <div className={styles.e3}></div>
                <div className={styles.e4}></div>
            </div>

            <p className={styles.title}>
                Stop Guessing <br />
                <span style={{ fontWeight: 600 }}>Start Delivering</span>
            </p>

            <p className={styles.quote}>
                With Lumiare.ai, you can turn chaos into clarity, build trust with clients, and deliver success every time.
            </p>

            <img src={Star1} alt="" style={{ position: "absolute", left: "7%", top: "68%" }} />
            <img src={Star2} alt="" style={{ position: "absolute", left: "80%", top: "45%" }} />
        </div>
    );
}

export default Waitlist;