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
                <h1 className="text1">Cuidar de você.<br></br>Esse é o plano.</h1>
                <h3 className="text2">Escolha seu perfil e faça uma simulação para encontrar o melhor plano para você.</h3>
                <button className="botão">Ver todos os planos</button>
                <div className="containers">
                    <li>lorem ipsum</li>
                    <li>lorem ipsum</li>
                </div>
            </div>
        </div>
    );
}