function Login(){
    return(
<>
<div className='container-login'>
    <p className="quote2">Be among the first to experience<br/><span style={{fontWeight:"300"}}>the future of project delivery</span></p>
    <input type="text"  className="input" placeholder="Name"/>
    <input type="text"  className="input" placeholder="Company" style={{top:"9%"}}/>
    <input type="text"  className="input" placeholder="E-mail Address" style={{top:"13%"}}/>
    <input type="button" className="btn-login" value="Join the waitlist"/><p>Join the waitlist</p>
</div>
</>
    );
}

export default Login;