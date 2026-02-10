import styles from './index.module.css'  

function Login() {
    return (
        <div className={styles.containerLogin}>
            <p className={styles.quote2}>
                Be among the first to experience
                <br />
                <span style={{ fontWeight: "300" }}>
                    the future of project delivery
                </span>
            </p>

            <input type="text" className={styles.input} placeholder="Name" />
            <input type="text" className={styles.input} placeholder="Company" style={{ top: "9%" }} />
            <input type="text" className={styles.input} placeholder="E-mail Address" style={{ top: "13%" }} />

            <input type="button" className={styles.btnLogin} value="Join the waitlist" />
        </div>
    )
}

export default Login
