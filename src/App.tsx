import React from 'react';
import styles from './App.module.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/login/login";
import {BasicAuth} from './service/authService';




function App(authService:BasicAuth) {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login  />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
