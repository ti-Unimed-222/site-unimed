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

          <div className='navbar-link'>
            <li><a href="#home">Unimed Palmas</a></li>
            <li><a href="#servicos" >Serviços</a></li>
            <li><a href="#programas">Programas</a></li>
            <li><a href="#planos">Planos</a></li>
            <div className='local'>
              <MapPin className='localicon' />
              <h1 className='localtext'><a href='https://www.google.com/maps?q=-10.2089709,-48.3350843' target='_blank' rel='noopener noreferrer'>NOSSA LOCALIZAÇÃO</a></h1>
            </div>
          </div>   
        </div>
      </nav>
    );
  }


