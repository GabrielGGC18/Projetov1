import React from 'react';
import styles from '../styles/Home.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>Site Cristão</h1>
            </div>
            <nav>
                <ul className={styles.navList}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#cta">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;