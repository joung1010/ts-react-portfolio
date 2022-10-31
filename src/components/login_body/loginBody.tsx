import React from 'react';
import styles from './loginBody.module.css';

type LoginType = 'login'|'new';

type LoginBodyProps = {
    loginType:LoginType
}

const LoginBody:React.FC<LoginBodyProps> = ({loginType}) => {
    const buttonText = loginType === 'login' ? 'Login' : 'Join';

    return (
        <div className={styles.body}>
            <div className={styles.input_body}>
                <label htmlFor="id">아이디</label>
                <input id="id" type="text"/>
            </div>
            <div className={styles.input_body}>
                <label htmlFor="password">비밀번호</label>
                <input id="password" type="text"/>
            </div>
            <div className={styles.button_body}>
                <button className={styles.login_button}>{buttonText}</button>
            </div>
        </div>
    );
};

export default LoginBody;