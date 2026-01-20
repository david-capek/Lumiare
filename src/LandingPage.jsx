import { useLayoutEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Waitlist from './Waitlist';
import Waitlist2 from './Waitlist2';
import styles from './index.module.css'

function LandingPage() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        
        document.body.style.overflowY = "auto";
        document.body.style.height = "auto";
        document.body.classList.remove('solutions-page-active');
        document.body.classList.add('home-page-active');

        return () => {
            document.body.classList.remove('home-page-active');
        };
    }, []);

    return (
        <>
        <div className={styles.homeScrollContainer}>
            <Header />
            <Waitlist2 />
            <Footer />
        </div>
        </>
    );
}

export default LandingPage;