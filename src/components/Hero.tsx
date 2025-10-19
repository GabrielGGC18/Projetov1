import React from 'react';
import styles from '../styles/Home.module.css';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroInner + ' container'}>
                <div className={styles.heroText}>
                    <h1>Viva sua fé com propósito</h1>
                    <p>
                        Recursos, comunhão e conteúdo para fortalecer sua caminhada espiritual.
                    </p>
                    <div style={{marginTop:16}}>
                        <Link to="/about" className={styles.primaryBtn}>Saiba mais</Link>
                        <a href="#cta" className={styles.secondaryBtn} style={{marginLeft:12}}>Participe</a>
                    </div>
                </div>
                <div className={styles.heroImage} aria-hidden>
                    {/* Placeholder illustration */}
                    <svg width="320" height="220" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="320" height="220" rx="16" fill="#EEF2FF"/>
                        <path d="M40 160C80 120 120 120 160 160C200 200 240 200 280 160" stroke="#6366F1" strokeWidth="6" strokeLinecap="round"/>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;