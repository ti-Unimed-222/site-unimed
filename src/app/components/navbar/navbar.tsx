// src/components/Navbar.js
'use client';
import React, { useState } from 'react';

import './Navbar.css';
import logo from "./logo.png"
import Image from 'next/image';

export default function Navbar() {
    const [searchTerm, setSearchTerm] = React.useState("");
  
    return (
      <nav className="bg-green-700 text-white">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image src = {logo} alt="Logo" height={120} width={120}/>
            <span className="text-xl font-bold">Unimed Palmas</span>
          </div>
  
          {/* Navigation Links */}
          <ul className="flex space-x-6 text-white font-medium">
            <li><a href="#servicos" className="hover:text-gray-300">Serviços</a></li>
            <li><a href="#programas" className="hover:text-gray-300">Programas</a></li>
            <li><a href="#planos" className="hover:text-gray-300">Planos</a></li>
          </ul>
  
          {/* Search & Login */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 rounded-md text-black"
              placeholder="Pesquise aqui"
            />
            <button className="bg-white text-green-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-200">
              Login
            </button>
          </div>
        </div>
      </nav>
    );
  }


