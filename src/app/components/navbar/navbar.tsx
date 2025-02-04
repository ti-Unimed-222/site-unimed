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
          
            <li><a href="#home" className="hover:text-gray-300">Unimed Palmas</a></li>
            <li><a href="#servicos" className="hover:text-gray-300">Serviços</a></li>
            <li><a href="#programas" className="hover:text-gray-300">Programas</a></li>
            <li><a href="#planos" className="hover:text-gray-300">Planos</a></li>
          </ul>
          </div>
          </div>
          
          {/* Search & Login */}
          <div className='search'>
          <div className= "flex items-center space-x-4"/**/>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-7 py-2 rounded-md text-black"
              placeholder="Faça sua pesquisa aqui"
            />
            <button className="login">
              Login
            </button>
          </div>
          </div>
        </div>
      </nav>
    );
  }


