// src/components/Navbar.js
'use client';
import React, { useState } from 'react';

import './Navbar.css';
import logo from "./logo.png"
import Image from 'next/image';
import Numero from './contato.png'
import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import { MapPin } from 'lucide-react'; 

export default function Navbar() {
    const [searchTerm, setSearchTerm] = React.useState("");

      const [isOpen, setIsOpen] = useState(false);

      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
    
  
    return (
      <nav className="navbar">
        <div className="logo">
              <Image src = {logo} alt="Logo" height={170} width={170}/>
            </div>
        <div className="nav-container">
          <div className='primeira-nav'>
            <div className='numero'>
              <Image src={Numero} alt='numero'/>
            </div>
          <div className='bots'>
            <div className='busca-container'>
            <Search className="search-icon" />
              <input className='search'
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Faça sua busca aqui"
              />
            </div>

              
              <button className="login">
              <User className='usericon' />
                Login
              </button>
              </div>
              
          </div>

          <div className="navbar-link">
          <div className="drop5">
    <button className="home">Home</button>
    <ul className="homeDrop">
      <li><a href="#">Quem somos</a></li>
      <li><a href="#">Notícias</a></li>
      <li><a href="#">LGPD</a></li>
    </ul>
  </div>
  <div className="drop2">
    <button className="servicos">Serviços</button>
    <ul className="servicosDrop">
      <li><a href="#">Atendimento</a></li>
      <li><a href="#">Ouvidoria</a></li>
    </ul>
  </div>

  <div className="drop3">
    <button className="portais">Portais</button>
    <ul className="portaisDrop">
      <li><a href="#">TISS</a></li>
      <li><a href="#">TUSS</a></li>
    </ul>
  </div>

  <div className="drop4">
    <button className="planos">Planos</button>
    <ul className="planosDrop">
      <li><a href="#">Conheça nossos planos</a></li>
    </ul>
  </div>
  
  <div className='local'>
    <MapPin className='localicon'/>
      <a href='https://www.google.com/maps/@-10.2089722,-48.3376582,17z?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D'>
      NOSSA LOCALIZAÇÃO
      </a>
    
  </div>
</div>

        </div>
      </nav>
    );
  }


