'use client';
import React, {useState} from "react";
import Image from "next/image";
import Navbar from "./components/navbar/navbar"
import ImageCarousel from "./home/carrossel/carrossel";
import Contatos from "./home/contatos/contatos";
import Fundo from "./home/fundo/fundo";
import Servicos from "./servicos/servicos";

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

      <div className="servicos">
        <Servicos />
      </div>
    </div>
  );
}
