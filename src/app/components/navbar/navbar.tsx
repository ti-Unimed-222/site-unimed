import React, { useState } from 'react';
import './Navbar.css';
import logo from "./logo.png";
import Image from 'next/image';
import Numero from './contato.png';
import { Search, User, MapPin, Menu } from 'lucide-react';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({});
  const [selectedParent, setSelectedParent] = useState<string | null>(null); // Para controlar o item pai selecionado

  const toggleDropdown = (menuKey: string) => {
    setDropdownOpen((prev) => {
      // Fechar todos os dropdowns, e abrir o atual
      const newDropdownState = { ...prev, [menuKey]: !prev[menuKey] };
      
      // Fechar todos os outros dropdowns quando abrir um
      Object.keys(newDropdownState).forEach(key => {
        if (key !== menuKey) {
          newDropdownState[key] = false;
        }
      });
      
      return newDropdownState;
    });
    setSelectedParent(menuKey); // Define o item pai como selecionado ao clicar
  };

  const handleSubItemClick = (menuKey: string) => {
    setSelectedParent(menuKey); // Mantém o item pai como selecionado após clicar no subitem
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Image src={logo} alt="Logo" height={170} width={170} />
      </div>
      <div className="nav-container">
        <div className="primeira-nav">
          <div className={`numero ${searchActive ? "hidden" : ""}`}>
            <a href='https://api.whatsapp.com/send/?phone=%2B556330255810&text&type=phone_number&app_absent=0' target='_blank' rel='noopener noreferrer'>
              <Image src={Numero} alt='numero-image' height={200} width={200} />
            </a>
          </div>
          <div className='bots'>
            <div className='busca-container'>
              <Search className="search-icon" />
              <input
                className={`search ${searchActive ? "focused" : ""}`}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Faça sua busca aqui"
                onFocus={() => setSearchActive(true)}
                onBlur={() => setSearchActive(false)}
              />
            </div>
            <button className={`login ${searchActive ? "hidden" : ""}`}>
              <User className='usericon' />
              Login
            </button>
          </div>
        </div>

        <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className='menuicon' />
        </div>

        <div className={`navbar-collapse ${menuOpen ? "show" : ""}`}>
          <div className={`navbar-link ${menuOpen ? "open" : ""}`}>
            {/* Dropdown Home */}
            <div className="drop5">
              <button 
                 className={`home ${selectedParent === 'home' ? 'selected' : ''}`} // Aplica a classe 'selected' quando o item pai estiver selecionado
                 onClick={() => toggleDropdown('home')}
              >
                Home
              </button>
              <ul className={`homeDrop ${dropdownOpen['home'] ? "open" : ""}`}>
                <li><a href="#"  onClick={() => handleSubItemClick('home')}>Quem somos</a></li>
                <li><a href="#"  onClick={() => handleSubItemClick('home')}>Notícias</a></li>
                <li><a href="#"  onClick={() => handleSubItemClick('home')}>LGPD</a></li>
              </ul>
            </div>

            {/* Dropdown Serviços */}
            <div className="drop2">
              <button 
                className={`servicos ${selectedParent === 'servicos' ? 'selected' : ''}`}
                onClick={() => toggleDropdown('servicos')}
              >
                Serviços
              </button>
              <ul className={`servicosDrop ${dropdownOpen['servicos'] ? "open" : ""}`}>
                <li><a href="#"  onClick={() => handleSubItemClick('home')}>Atendimento</a></li>
                <li><a href="#"  onClick={() => handleSubItemClick('home')}>Ouvidoria</a></li>
              </ul>
            </div>

            {/* Dropdown Portais */}
            <div className="drop3">
              <button className={`portais ${selectedParent === 'portais' ? 'selected' : ''}`}
                onClick={() => toggleDropdown('portais')}>Portais</button>
              <ul className={`portaisDrop ${dropdownOpen['portais'] ? "open" : ""}`}>
                <li><a href="#"  onClick={() => handleSubItemClick('home')}>TISS</a></li>
                <li><a href="#"  onClick={() => handleSubItemClick('home')}>TUSS</a></li>
              </ul>
            </div>

            {/* Dropdown Planos */}
            <div className="drop4">
              <button className={`planos ${selectedParent === 'planos' ? 'selected' : ''}`}
                onClick={() => toggleDropdown('planos')}>Planos</button>
              <ul className={`planosDrop ${dropdownOpen['planos'] ? "open" : ""}`}>
                <li><a href="#"  onClick={() => handleSubItemClick('home')}>Conheça nossos planos</a></li>
              </ul>
            </div>

            <div className='local'>
              <MapPin className='localicon' />
              <li><a href='https://www.google.com/maps/@-10.2089722,-48.3376582,17z?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D'>
                NOSSA LOCALIZAÇÃO
              </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
