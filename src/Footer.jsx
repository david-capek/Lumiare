import lumiarelogo from './assets/lumiare.svg'
import IA from './assets/IA.svg'
import Maiven from './assets/Maiven.png'

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
        <p>Home</p>
        <p>Solutions</p>
        <p>Pricing</p>
        <p>About us</p>
        <p>Contact</p>
      </div>
      <div className='terms'>
        <p>Privacy policy</p>
        <p>Terms</p>
      </div>
    </footer>
  );
}

export default Footer;
