import React from 'react';
import styles from '../styles/Home.module.css';

const testimonies = [
    {name:'Mariana', text:'Encontrei suporte e crescimento espiritual aqui.'},
    {name:'João', text:'Os estudos semanais transformaram minha rotina.'},
    {name:'Lucas', text:'Ambiente acolhedor e ensino fiel.'},
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className={styles.testimonials}>
            <div className="container">
                <h2>O que as pessoas dizem</h2>
                <div className={styles.testimonialsGrid}>
                    {testimonies.map((t, i) => (
                        <blockquote className={styles.testimonial} key={i}>
                            <p>“{t.text}”</p>
                            <footer>— {t.name}</footer>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;