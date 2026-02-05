import Rocket from './assets/rocket.svg';
import Star1 from './assets/star1.svg';
import Star2 from './assets/star2.svg';
import styles from './index.module.css';
import { Link } from "react-router-dom";

function Waitlist2() {
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
                Turn fragmented conversations into a single, precise, and actionable Statement of Work.
            </p>
            <br />
            <p className={styles.quote4}>
                Lumiare.ai automates the chaos, so you can build trust and deliver success.
            </p>
            <img src={Star1} alt="" style={{ position: "absolute", left: "7%", top: "68%" }} />
            <img src={Star2} alt="" style={{ position: "absolute", left: "80%", top: "45%" }} />
           <Link to="/homepage" className={styles.startFree} style={{ fontWeight: 600 }}>Start for free</Link>
           <Link to="/homepage" className={styles.demo2} style={{ fontWeight: 600 }}>Request a demo</Link>
           <iframe
           className={styles.videoLanding}
           width="560"
           height="315"
           src="https://www.youtube.com/embed/wqUiqS-lEV8"
           title="YouTube video player"
           frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowFullScreen>
           </iframe>

        </div>
    );
}

export default Waitlist2;