'use client';
import React, {useState} from "react";
import Image from "next/image";
import Navbar from "./components/navbar/navbar"
import ImageCarousel from "./home/carrossel/carrossel";
import Contatos from "./home/contatos/contatos";
import Fundo from "./home/fundo/fundo";
import Servicos from "./servicos/servicos";
import Container from "./home/container/container";
import Blog from './blog.png'


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

      <div className="container">
        <Container />
      </div>

      <div className="blog">
        <a href="https://viverbem.unimed.coop.br/" target="_blank" rel="noopener noreferrer"><Image src={Blog} alt="blog" width={10000}></Image></a>
      </div>

  

    </div>
  );
}
