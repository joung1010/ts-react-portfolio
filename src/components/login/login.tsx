import React from 'react';
import styles from './login.module.css'

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
            <button>Login</button>
        </section>
    );
};

export default Login;