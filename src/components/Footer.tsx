import React from 'react';
import styles from '../styles/Home.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {new Date().getFullYear()} Seu Site Cristão. Todos os direitos reservados.</p>
                <nav>
                    <ul className={styles.footerLinks}>
                        <li><a href="/sobre">Sobre</a></li>
                        <li><a href="/contato">Contato</a></li>
                        <li><a href="/privacidade">Política de Privacidade</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;