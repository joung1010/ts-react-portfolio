import React from 'react';
import styles from './App.module.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/login/login";
import { BasicAuth} from './service/authService';


type Auth = {
    authService?: BasicAuth;
}

 const App:React.FC<Auth> = ({authService}): JSX.Element => {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Routes>
                    {['/','/login','/join'].map(path => {
                        if (path === '/join') {
                            return <Route path={path} element={<Login loginType="new" authService={authService}/>}/>;
                        } else {
                            return <Route path={path} element={<Login loginType="login" authService={authService}/>}/>
                        }
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
