import lumiarelogo from './assets/lumiare.svg'
import IA from './assets/IA.svg'
import Maiven from './assets/Maiven.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="container-footer">
      <div className="lumiare-logo">
        <img src={lumiarelogo} alt="Lumiare logo" className="lumiare-base" />
        <img src={IA} alt="IA" className="ia-logo" />
        <p className='createdby'>Created by</p>
        <img src={Maiven} alt="" className='maiven-image'/>
      </div>
      <p className='copyright'>© Lumiare™ 2025. All Rights Reserved. </p>
      <div className='info-footer'>
        <Link to="/">Home</Link>
        <Link to="/solutions">Solutions</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className='terms'>
        <p>Privacy policy</p>
        <p>Terms</p>
      </div>
    </footer>
  );
}

export default Footer;
