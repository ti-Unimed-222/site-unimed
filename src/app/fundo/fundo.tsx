'use client';
import React from "react";
import Image from "next/image";
import Imagem from './fundo.png'
import './fundo.css'

export default function Fundo() {
    return (
        <div className="fundo">
            <div className="imagem">
                <div className="overlay"></div> {/* Div para a sobreposição */}
                <li  className="text1"><br></br><h1>Cuidar de você.</h1></li>
                <li  className="text11"><br></br><h1>Esse é o plano.</h1></li>
                <li  className="text2"><h3>Escolha seu perfil e faça uma simulação para encontrar o<br /><span style={{ display: 'block', marginTop: '18px' }} /> melhor plano pra você.</h3></li>
                {/* <li  className="text22"><h3>melhor plano para você.</h3></li> */}
                <button className="botão"><a href="https://preproducao.unimed.coop.br/site/planos"  target="_blank" rel="noopener noreferrer">Ver todos os planos</a></button>
                <div className="containers">
                    <div className="container1">
                        <li>lorem ipsum</li>
                    </div>
                    <div className="container2">
                        <li>lorem ipsum</li>
                    </div>
                </div>
            </div>
        </div>
    );
}