import Footer from "../Footer";
import Header2 from "../Header2";
import Girl from '../assets/girl.svg';
import { useLayoutEffect } from "react";
import Message from "../assets/message.svg";
import SOW from '../assets/sow.svg';
import styles from '../index.module.css'

export default function Solutions() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);

        document.body.style.overflowY = "auto";
        document.body.style.height = "auto";
        document.body.classList.add('solutions-page-active');
        document.body.classList.remove('home-page-active');

        return () => {
            document.body.style.overflowY = "hidden";
            document.body.style.height = "100vh";
            document.body.classList.remove('solutions-page-active');
        };
    }, []);

    return (
        <>
            <div className={styles.solutionsPage}></div>
            <Header2/>
            <div className={styles.c1}>
                <img src={Girl} alt="girl" className={styles.girlImg}/>
                
                <div className={styles.quoteContainer}>
                    <p className={styles.quote3}>
                        From Chaos<br/>
                        <span style={{fontWeight:"600"}}>to a Master Plan</span>
                    </p>
                    <p className={styles.text}>
                        A comprehensive, end-to-end workflow designed for professional services companies like yours. Lumiare.ai is a complete workflow for your most critical projects, giving your team superhuman precision and efficiency.
                    </p>
                    <p className={styles.btnStart}>Start for Free</p>
                    <p className={styles.btnRequest}>Request a Demo</p>
                </div>

                <img src={Message} alt="" className={styles.message}/>
                <img src={SOW} alt="" className={styles.sow}/>
            </div>
            <Footer/>
        </>
    );
}