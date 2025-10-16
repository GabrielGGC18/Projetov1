import React from 'react';
import styles from '../styles/Home.module.css';

const CTA: React.FC = () => {
    return (
        <div className={styles.ctaContainer}>
            <h2 className={styles.ctaTitle}>Join Us Today!</h2>
            <p className={styles.ctaDescription}>
                Be part of our community and start your journey with us. Sign up now to get exclusive access to our resources.
            </p>
            <button className={styles.ctaButton}>Get Started</button>
        </div>
    );
};

export default CTA;