import Lumiare from './assets/lumiare.svg'
import IA from './assets/IA.svg'

export default function Header2(){
    return(
        <>

    <header className='container-header2-main'>
        <div className="container-header2">
            <img src={Lumiare} alt='Logo' className='lumiare-img'></img>
            <img src={IA} alt='Logo' className='ia-logo2'></img>
        </div>
        <div className='info-header2'>
            <p style={{fontWeight:"600"}}>Solutions</p>
            <p>Pricing</p>
            <p>About Us</p>
            <p className='signin2'>Sign in</p>
            <p className='demo'>Request a demo</p>
        </div>
    </header>
    </>
    );
}