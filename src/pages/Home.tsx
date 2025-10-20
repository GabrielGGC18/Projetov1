import React from 'react';
import { Navigate } from 'react-router-dom';

const Home: React.FC = () => {
  // Redirect to login page
  return <Navigate to="/login" replace />;
};

export default Home;