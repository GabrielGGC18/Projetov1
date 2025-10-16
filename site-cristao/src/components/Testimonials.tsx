import React from 'react';
import styles from '../styles/Home.module.css';

const testimonialsData = [
    {
        name: "João Silva",
        testimonial: "Este site mudou minha vida! Agradeço a todos os envolvidos.",
        position: "Cliente Satisfeito"
    },
    {
        name: "Maria Oliveira",
        testimonial: "A experiência foi incrível, recomendo a todos!",
        position: "Usuária Fiel"
    },
    {
        name: "Carlos Pereira",
        testimonial: "Serviço excepcional e suporte sempre disponível.",
        position: "Empreendedor"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className={styles.testimonials}>
            <h2>Depoimentos</h2>
            <div className={styles.testimonialList}>
                {testimonialsData.map((item, index) => (
                    <div key={index} className={styles.testimonialItem}>
                        <p>"{item.testimonial}"</p>
                        <h4>{item.name}</h4>
                        <span>{item.position}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;