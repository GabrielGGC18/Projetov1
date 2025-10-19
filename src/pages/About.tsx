import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="container">
      <h1>Sobre</h1>
      <p>Informações sobre o projeto.</p>
      <p>
        <Link to="/">Voltar</Link>
      </p>
    </div>
  );
};

export default About;