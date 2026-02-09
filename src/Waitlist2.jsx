import Rocket from './assets/rocket.svg';
import Star1 from './assets/star1.svg';
import Star2 from './assets/star2.svg';
import styles from './index.module.css';
import Frame17 from './assets/Frame17.svg';
import Group42 from './assets/Group42.svg';
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
        <div className={styles.shadow}></div>
        <div className={styles.discover}>
            <div className={styles.discover2}>
                <p className={styles.theproblem}>the problem</p>
                <p className={styles.discoverybox}>The Discovery Black Box</p>
                <p className={styles.desc}>You know the feeling. The initial excitement of a new project fades into a series of uncaptured requirements, scattered notes, and countless fragmented conversations. <span style={{fontWeight:600 }}>The result? Project delays, scope creep, and misaligned outcomes.</span> Your final Statement of Work becomes a best-guess document, not a collaborative blueprint, putting your project—and your client relationship—at risk.</p>
            </div>
            <div className={styles.trapez}></div>
        </div>
        <div className={styles.cont}>
            <p className={styles.c2}>Lumiare</p>
            <p className={styles.c3}>A New Way to Work</p>
            <Link to="/homepage" className={styles.startFree} style={{ fontWeight: 600, top: '19%'}}>Start for free</Link>
           <Link to="/homepage" className={styles.demo2} style={{ fontWeight: 600, top: '19%'}}>Request a demo</Link>
           <div className={styles.c4}></div>
           <img src={Frame17} alt=""  style={{top: '30%', left: '10%', position: 'absolute'}}/>
           <p className={styles.c5}>The traditional project discovery process sometimes takes energy and direction on its own, pulling people in many directions. Lumiare is your Digital Consultant, helping you and your client define what is needed and what will be delivered. We've replaced the chaotic, manual process with an intelligent, end-to-end workflow that ensures every detail is captured and every stakeholder is aligned.</p>
           <p className={styles.c6}>Lumiare acts as a single, structured repository for all project requirements, allowing your team to move from initial discovery to a precise Statement of Work (agreement with your Client) with speed, confidence and precision.</p>
           <img src={Group42} alt="" style={{top: '60%', left: '50%', position: 'absolute'}}/>
           <div className={styles.d1}>
            <p className={styles.c7}>Drastically Reduce Time from Initial Discovery to the final SoW</p>
            <p className={styles.c8}>Cut the time from initial discovery to a finalized Statement of Work from weeks to days. That means more hours left for value added work for you and your client, reducing time to a project kick-off.</p>
           </div>
           <div className={styles.d2}></div>
           <div className={styles.d3}></div>
        </div>
        </div>
    );
}

export default Waitlist2;