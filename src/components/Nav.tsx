import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

const Nav: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <div className="container" style={{display:'flex', gap:20, alignItems:'center'}}>
                <Link to="/" className={styles.navLink}>Início</Link>
                <Link to="/about" className={styles.navLink}>Sobre</Link>
                <a href="#features" className={styles.navLink}>Recursos</a>
                <a href="#testimonials" className={styles.navLink}>Depoimentos</a>
            </div>
        </nav>
    );
};

export default Nav;