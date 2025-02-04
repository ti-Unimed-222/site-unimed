import React, { useState } from 'react';
import './App.css';

const Button: React.FC = () => {
  // Estado para gerenciar o aumento ao clicar
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true); // Quando clicar, aumenta
    setTimeout(() => {
      setClicked(false); // Após 0.2s volta ao normal
    }, 200); // O tempo de aumento (mesmo tempo da transição)
  };

  return (
    <button 
      className={`button ${clicked ? 'clicked' : ''}`} 
      onClick={handleClick}
    >
      Clique aqui
    </button>
  );
};

export default Button;
