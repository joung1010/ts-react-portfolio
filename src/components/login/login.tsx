import React from 'react';
import styles from './login.module.css';
import Footer from "../footer/footer";
import LoginBody from "../login_body/loginBody";
import {NavigateFunction, useNavigate} from "react-router-dom";

const GOOGLE_IMG = 'images/google.png';
const GITHUB_IMG = 'images/github.png';

type LoginType = 'login'|'new';

type LoginProps = {
    loginType:LoginType;
}


const Login = ({loginType}:LoginProps) => {
    const navigate: NavigateFunction = useNavigate();
    const onHandleJoin = () :void => {
        navigate("/join");
    };

    return (
        <section className={styles.login}>
           <LoginBody loginType={loginType}/>
            <ul className={styles.login_img}>
                <li><button className={styles.button}><img src={GITHUB_IMG} alt="github" data-name="Google"/></button></li>
                <li><button className={styles.button}><img src={GOOGLE_IMG} alt="google" data-name="Github"/></button></li>
            </ul>
            {
                loginType !== 'new' &&
                <button className={styles.new} onClick={(event)=>{onHandleJoin()}}>신규 가입</button>
            }
            <Footer/>
        </section>
    );
};

export default Login;