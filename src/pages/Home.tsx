import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            <Header />
            <Nav />
            <Hero />
            <Features />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    );
};

export default Home;