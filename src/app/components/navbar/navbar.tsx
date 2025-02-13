import React, { useState } from 'react';
import './Navbar.css';
import logo from "./logo.png";
import Image from 'next/image';
import { Search, User, MapPin, Menu, Home } from 'lucide-react';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  
    setMenuOpen(!menuOpen);
  };
  

  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({});
  const [selectedParent, setSelectedParent] = useState<string | null>(null); 

  const toggleDropdown = (menuKey: string) => {
    setDropdownOpen((prev) => {
      const newDropdownState = { ...prev, [menuKey]: !prev[menuKey] };
      
      Object.keys(newDropdownState).forEach(key => {
        if (key !== menuKey) {
          newDropdownState[key] = false;
        }
      });
      
      return newDropdownState;
    });
    setSelectedParent(menuKey);
  };

  
  const handleSubItemClick = (menuKey: string) => {
    setSelectedParent(menuKey);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Image src={logo} alt="Logo" height={170} width={170} />
      </div>
      <div className="nav-container">
        <div className="primeira-nav">
          
          <div className='local'>
              <MapPin className='localicon' />
              <li><a href='https://www.google.com/maps/@-10.2089722,-48.3376582,17z?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D'>
                NOSSA LOCALIZAÇÃO
              </a>
              </li>
            </div>
            <div className="numero">
            <button className='numero-bt'>
            <a href='https://api.whatsapp.com/send/?phone=%2B556330255810&text&type=phone_number&app_absent=0' target='_blank' rel='noopener noreferrer'>
            (63) 3025-5810
            </a>
            </button>
          </div>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu }>
          <Menu className='menuicon' />
        </div>

        <div className={`navbar-collapse ${menuOpen ? "show" : ""}`}>
          <div className={`navbar-link ${menuOpen ? "open" : ""}`}>

            <div className="drop5">
              <button 
                 className={`home ${selectedParent === 'home' ? 'selected' : ''}`} 
                 onClick={() => toggleDropdown('home')}
              >
                Home
              </button>
              <ul className={`homeDrop ${dropdownOpen['home'] ? "open" : ""}`}>
                <li><a href="https://unimedpalmas.coop.br/quemsomos"  onClick={() => handleSubItemClick('home')}>Quem somos</a></li>
                <li><a href="https://unimedpalmas.coop.br/noticias"  onClick={() => handleSubItemClick('home')}>Notícias</a></li>
                <li><a href="https://unimedpalmas.coop.br/lgpd"  onClick={() => handleSubItemClick('home')}>LGPD</a></li>
              </ul>
            </div>

            <div className="drop2">
              <button 
                className={`servicos ${selectedParent === 'servicos' ? 'selected' : ''}`}
                onClick={() => toggleDropdown('servicos')}
              >
                Serviços
              </button>
              <ul className={`servicosDrop ${dropdownOpen['servicos'] ? "open" : ""}`}>
                <li><a href="https://portal.unimedpalmas.coop.br/"  onClick={() => handleSubItemClick('home')}>Canal do Beneficiário</a></li>
                <li><a href="https://portal.unimedpalmas.coop.br/pls_paginaGuiaMedico.jsp"  onClick={() => handleSubItemClick('home')}>Guia Médico</a></li>
                <li><a href="https://canal.unimedpalmas.coop.br/cartao_virtual"  onClick={() => handleSubItemClick('home')}>Cartão Virtual</a></li>
                <li><a href="https://boleto.unimedpalmas.coop.br/"  onClick={() => handleSubItemClick('home')}>Boleto</a></li>
                <li><a href="https://unimedpalmas.coop.br/reembolso"  onClick={() => handleSubItemClick('home')}>Solicitar Reembolso</a></li>
                <li><a href="https://unimedpalmas.coop.br/cancelamento"  onClick={() => handleSubItemClick('home')}>Cancelamento Contrato</a></li>
              </ul>
            </div>

            <div className="drop3">
              <button className={`portais ${selectedParent === 'portais' ? 'selected' : ''}`}
                onClick={() => toggleDropdown('portais')}>Portais</button>
              <ul className={`portaisDrop ${dropdownOpen['portais'] ? "open" : ""}`}>
                <li><a href="#"  onClick={() => handleSubItemClick('home')}>TISS</a></li>
                <li><a href="#"  onClick={() => handleSubItemClick('home')}>TUSS</a></li>
              </ul>
            </div>

            <div className="drop4">
              <button className={`planos ${selectedParent === 'planos' ? 'selected' : ''}`}
                onClick={() => toggleDropdown('planos')}>Planos</button>
              <ul className={`planosDrop ${dropdownOpen['planos'] ? "open" : ""}`}>
                <li><a href="#"  onClick={() => handleSubItemClick('home')}>Conheça nossos planos</a></li>
              </ul>
            </div>

            
          </div>
        </div>
      </div>
    </nav>
  );
}
