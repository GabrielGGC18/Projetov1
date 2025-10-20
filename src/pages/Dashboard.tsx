import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-400 via-pink-300 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
        <Button 
          onClick={() => navigate('/login')}
          variant="secondary"
        >
          Voltar para Login
        </Button>
      </div>
    </div>
  );
}