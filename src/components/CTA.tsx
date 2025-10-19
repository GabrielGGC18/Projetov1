import React from 'react';
import styles from '../styles/Home.module.css';

const CTA: React.FC = () => {
    return (
        <section id="cta" className={styles.cta}>
            <div className="container">
                <div className={styles.ctaInner}>
                    <div>
                        <h3>Junte-se à nossa comunidade</h3>
                        <p>Receba novidades, eventos e devocionais semanais em seu e-mail.</p>
                    </div>
                    <div>
                        <a className={styles.primaryBtn} href="#subscribe">Inscrever-se</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;