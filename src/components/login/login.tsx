import React, {MouseEventHandler, useRef} from 'react';
import styles from './login.module.css';
import Footer from "../footer/footer";
import LoginBody from "../login_body/loginBody";
import {NavigateFunction, useNavigate} from "react-router-dom";
import { BasicAuth} from '../../service/authService';
import {User, UserCredential} from "@firebase/auth";

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

    const gotoPortFolio = (userId: string): void => {
        navigate("/portfolio", {state: {userId,}})
    };
    const gotoLogin = (userId: string): void => {
        navigate("/login", {state: {userId,}})
    };

    const authLogin = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        const provider:string = e.currentTarget.dataset.name as string;
          authService!.loginAuth(provider)
              .then((result) => {
                  gotoPortFolio(result.user.uid);
              });
    };

    const onHandleLogin = (email: string, password: string):Promise<UserCredential> => {
        if (loginType === 'login') {
            return authService!.login(email, password);
        } else {
            return authService!.joinMember(email, password);
        }
    };

    return (
        <section className={styles.login}>
           <LoginBody loginType={loginType} onHandleLogin={onHandleLogin} movePage={loginType === 'login' ? gotoPortFolio : gotoLogin}/>
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
                <button className={styles.new} onClick={(event)=>{gotoJoin()}}>?????? ??????</button>
            }
            <Footer/>
        </section>
    );
};

export default Login;