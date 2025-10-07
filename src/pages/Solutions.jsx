import Footer from "../Footer";
import Header2 from "../Header2";
import Girl from '../assets/girl.svg'
import { useLayoutEffect } from "react";

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
            <div className="solutions-page">
            </div>
            <Header2/>
            <div className='c1'> 
                <img src={Girl} alt="girl" className="girl-img"/>
            </div>
            <Footer/>
        </>
    );
}