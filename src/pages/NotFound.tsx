import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="container">
      <h1>404 — Não encontrado</h1>
      <p>Página não encontrada.</p>
      <p>
        <Link to="/">Ir para home</Link>
      </p>
    </div>
  );
};

export default NotFound;