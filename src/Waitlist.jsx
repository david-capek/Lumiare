import Rocket from './assets/rocket.svg';
import Star1 from './assets/star1.svg';
import Star2 from './assets/star2.svg';

function Waitlist(){
return(
<div className='container-waitlist'>
    <img src={Rocket} alt="Rocket" className='rocket-image'/>
    <div className='ellipse'>
        <div className='e1'></div>
        <div className='e2'></div>
        <div className='e3'></div>
        <div className='e4'></div>
    </div>
    <p className='title'>Stop Guessing <br/><span style={{fontWeight:600}}>Start Delivering</span></p>
    <p className='quote'>With Lumiare.ai, you can turn chaos into clarity, build trust with clients, and deliver success every time.</p>
    <img src={Star1} alt="" style={{ position: "absolute", left: "7%", top: "68%" }}/>
    <img src={Star2} alt="" style={{ position: "absolute", left: "80%", top: "45%" }}/>
</div>
);
}

export default Waitlist;