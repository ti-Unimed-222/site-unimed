import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, MapPin, Search, User } from 'lucide-react';
import logo from './path/logo.png'; 
import Numero from './path/numero.png';
import './Navbar.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Image src={logo} alt="Logo" height={170} width={170} />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <Menu />
      </button>
      <div className={`nav-container ${isMenuOpen ? 'show' : ''}`}>
        <div className="primeira-nav">
          <div className="numero">
            <Image src={Numero} alt="numero" />
          </div>
          <div className="bots">
            <div className="busca-container">
              <Search className="search-icon" />
              <input
                className="search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Faça sua busca aqui"
              />
            </div>
            <button className="login">
              <User className="usericon" />
              Login
            </button>
          </div>
        </div>

        <ul className="navbar-link">
          <li className="drop5">
            <button className="home">Home</button>
            <ul className="homeDrop">
              <li><a href="#">Home</a></li>
              <li><a href="#">Quem somos</a></li>
              <li><a href="#">Notícias</a></li>
              <li><a href="#">LGPD</a></li>
            </ul>
          </li>
          <li className="drop2">
            <button className="servicos">Serviços</button>
            <ul className="servicosDrop">
              <li><a href="#">Atendimento</a></li>
              <li><a href="#">Ouvidoria</a></li>
            </ul>
          </li>
          <li className="drop3">
            <button className="portais">Portais</button>
            <ul className="portaisDrop">
              <li><a href="#">TISS</a></li>
              <li><a href="#">TUSS</a></li>
            </ul>
          </li>
          <li className="drop4">
            <button className="planos">Planos</button>
            <ul className="planosDrop">
              <li><a href="#">Conheça nossos planos</a></li>
            </ul>
          </li>
          <li className="local">
            <MapPin className="localicon" />
            <a href="https://www.google.com/maps/@-10.2089722,-48.3376582,17z?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D">
              NOSSA LOCALIZAÇÃO
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
