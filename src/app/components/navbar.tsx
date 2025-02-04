// src/components/Navbar.js
'use client';
import React, { useState } from 'react';
import './Navbar.css';
import logo from "./logo.png"
import Image from 'next/image';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <Image src = {logo} alt = "logo unimed" width={128}
              height={128}
              className="object-cover w-full h-full"></Image>
      </div>
      <ul className="navbar-list">
      <li className="navbar-item">
          <a href="#home" className="navbar-link">Unimed Palmas</a>
        </li>
        <li className="navbar-item">
          <a href="#servicos" className="navbar-link">Serviços</a>
        </li>
        <li className="navbar-item">
          <a href="#programas" className="navbar-link">Programas</a>
        </li>
        <li className="navbar-item">
          <a href="#planos" className="navbar-link">Planos</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
