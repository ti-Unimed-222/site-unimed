'use client';
import React, {useState} from "react";
import Image from "next/image";
import Navbar from "./components/navbar/navbar"
import ImageCarousel from "./carrossel/carrossel";
import Contatos from "./contatos/contatos";
import Fundo from "./fundo/fundo";

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="carrossel">
          <ImageCarousel></ImageCarousel>
      </div>

      <div className="Contatos">
        <Contatos />
      </div>

      <div className="fundo">
        <Fundo />
      </div>
    </div>
  

  );
}
