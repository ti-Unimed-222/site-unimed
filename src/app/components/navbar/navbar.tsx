// src/components/Navbar.js
'use client';
import React, { useState } from 'react';

import './Navbar.css';
import logo from "./logo.png"
import Image from 'next/image';

import Button from './click';

export default function Navbar() {
    const [searchTerm, setSearchTerm] = React.useState("");
  
    return (
      <nav className="navbar">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image src = {logo} alt="Logo" height={170} width={170}/>
            <div className='navbar-link'>
            <ul className="flex space-x-6 text-gray font-medium">
          
            <li><a href="#home">Unimed Palmas</a></li>
            <li><a href="#servicos" >Serviços</a></li>
            <li><a href="#programas">Programas</a></li>
            <li><a href="#planos">Planos</a></li>
          </ul>
          </div>
          </div>
          
            {/* Search & Login */}

            <input className='search'
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Busca"
            />
            <button className="login">
              Login
            </button>
            </div>

      </nav>
    );
  }


