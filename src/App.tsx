import React from 'react';
import styles from './App.module.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/login/login";
import { BasicAuth} from './service/authService';


type Auth = {
    authServic?: BasicAuth;
}

 const App:React.FC<Auth> = ({authServic}): JSX.Element => {
     console.log(authServic);
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login loginType="login"/>}/>
                </Routes>
                <Routes>
                    <Route path="/join" element={<Login loginType="new"/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
