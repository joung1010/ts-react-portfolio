import React, {MouseEventHandler, useRef} from 'react';
import styles from './login.module.css';
import Footer from "../footer/footer";
import LoginBody from "../login_body/loginBody";
import {NavigateFunction, useNavigate} from "react-router-dom";
import { BasicAuth} from '../../service/authService';

const GOOGLE_IMG = 'images/google.png';
const GITHUB_IMG = 'images/github.png';

type LoginType = 'login'|'new';

type LoginProps = {
    loginType:LoginType;
    authService?:BasicAuth
}


const Login = ({loginType,authService}:LoginProps) => {
    const navigate: NavigateFunction = useNavigate();

    const gotoJoin = () :void => {
        navigate("/join");
    };

    const gotoPortFollio = (userId: string): void => {
        navigate("/card", {state: {userId,}})
    };

    const authLogin = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        const provider:string = e.currentTarget.dataset.name as string;
          authService!.loginAuth(provider)
              .then((result) => {
                  gotoPortFollio(result.user.uid);
              });
    };

    return (
        <section className={styles.login}>
           <LoginBody loginType={loginType}/>
            <ul className={styles.login_img}>
                <li><button className={styles.button}><img src={GITHUB_IMG} alt="github" data-name="Github"
                                                           onClick={(event)=>{authLogin(event)}}
                />
                </button>
                </li>
                <li><button className={styles.button}><img src={GOOGLE_IMG} alt="google" data-name="Google"
                                                           onClick={(event)=>{authLogin(event)}}
                />
                </button>
                </li>
            </ul>
            {
                loginType !== 'new' &&
                <button className={styles.new} onClick={(event)=>{gotoJoin()}}>신규 가입</button>
            }
            <Footer/>
        </section>
    );
};

export default Login;