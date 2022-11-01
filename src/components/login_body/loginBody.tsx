import React, {useRef} from 'react';
import styles from './loginBody.module.css';
import {UserCredential} from "@firebase/auth";

type LoginType = 'login'|'new';

type LoginBodyProps = {
    loginType: LoginType
    onHandleLogin: (emai: string, password: string) => Promise<UserCredential>
    movePage: (userId: string) => void
};

const LoginBody:React.FC<LoginBodyProps> = ({loginType,onHandleLogin,movePage}) => {
    const buttonText = loginType === 'login' ? 'Login' : 'Join';
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const onClickHandle = ():void => {
        debugger;
        const email = emailRef.current!.value  as string;
        const password = passwordRef.current!.value as string;
        if (!email) {
            alert("이메일을 입력해주세요");
            return;
        }else if (!password) {
            alert("비밀번호를 입력해 주세요.");
            return;
        }
        onHandleLogin(email, password)
            .then((result) => {
                emailRef.current!.value = '';
                passwordRef.current!.value = '';
                movePage(result.user.uid);
            });
    };



    return (
        <div className={styles.body}>
            <div className={styles.input_body}>
                <label htmlFor="id">이메일</label>
                <input id="id" ref={emailRef} type="text"/>
            </div>
            <div className={styles.input_body}>
                <label htmlFor="password">비밀번호</label>
                <input id="password" ref={passwordRef} type="password"/>
            </div>
            <div className={styles.button_body}>
                <button className={styles.login_button} onClick={onClickHandle}>{buttonText}</button>
            </div>
        </div>
    );
};

export default LoginBody;