import { useLayoutEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Waitlist from './Waitlist';
import Login from './Login';
import styles from './index.module.css'

function HomePage() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        
        document.body.style.overflowY = "hidden";
        document.body.style.height = "100vh";
        document.body.classList.remove('solutions-page-active');
        document.body.classList.add('home-page-active');

        return () => {
            document.body.classList.remove('home-page-active');
        };
    }, []);

    return (
        <>
            <Header />
            <Waitlist />
            <Login />
            <Footer />
        </>
    );
}

export default HomePage;