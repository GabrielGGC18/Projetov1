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
    <>
      <Header />
      <Nav />
      <main className={styles.main}>
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Home;