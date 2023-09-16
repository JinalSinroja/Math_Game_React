import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeComponent = () => {
  const navigate = useNavigate()

  return (
    <button
      className='btn btn-primary mt-3 px-4 w-25 fw-bold'
      style={{ backgroundColor: '#2d98d9', border: 'none' }}
      onClick={() => navigate('/game/1')}
    >
      Start Game
    </button>
  );
};

export default HomeComponent;
