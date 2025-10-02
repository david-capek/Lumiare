import lumiarelogo from './assets/lumiare.svg'
import IA from './assets/IA.svg'

function Header(){

    return(
        <header className='container-header'>
                <div className='lumiare-logo-header'>
                    <img src={lumiarelogo} alt="Lumiare logo" className="lumiare-header" />
                    <img src={IA} alt="IA" className="ia-header" />
                </div>
                <div className='info-header'>
                    <p>Solutions</p>
                    <p>Pricing</p>
                    <p>About us</p>
                    <p className='signin'>Sign in</p>
                </div>
        </header>
    );

}

export default Header;