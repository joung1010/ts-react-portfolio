import React from 'react';
import styles from './login.module.css'

const GOOGLE_IMG = 'images/google.png';
const GITHUB_IMG = 'images/github.png';

const Login = () => {
    return (
        <section className={styles.login}>
            <div className={styles.input_body}>
                <label htmlFor="id">아이디</label>
                <input id="id" type="text"/>
            </div>
            <div className={styles.input_body}>
                <label htmlFor="password">비밀번호</label>
                <input id="password" type="text"/>
            </div>
            <div className={styles.button_body}><button className={styles.login_button}>Login</button></div>
            <ul className={styles.login_img}>
                <li><button className={styles.button}><img src={GOOGLE_IMG} alt="google"/></button></li>
                <li><button className={styles.button}><img src={GITHUB_IMG} alt="google"/></button></li>
            </ul>
        </section>
    );
};

export default Login;