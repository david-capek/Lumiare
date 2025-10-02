import Rocket from './assets/rocket.svg';

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
</div>
);
}

export default Waitlist;