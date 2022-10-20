import React from 'react';
import styles from './footer.module.css';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h1 className={styles.title}>Let's Talk</h1>
            <div className={styles.contact}>
                <a href="https://github.com/joung1010" target="_blank"><button className={styles.button}><img src="images/github.png" alt="github"/></button></a>
                <h2 className={styles.email}>joung4342@gmail.com</h2>
            </div>
            <p className="contact__rights">2022 Mason park - All rights reserved</p>
        </footer>
    );
};

export default Footer;  