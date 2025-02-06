'use client';

import React from "react";
import './contatos.css';
import Image from "next/image";
import Contratar from './contratar2.png'
import Sos from './sos.png'
import Contato from './contatos.png';
import Sac from './sac.png';
import Whats from './whatsapp.png'
import Baner from './vemserunimed.png';


export default function Contatos() {
    return (
        <div className="container-contatos">
            <li className="contatos">
            <Image src= {Contato} alt="contato" height={600} width={600}>
            </Image>
            </li>
            <li className="sos"><a href="https://www.unimed.coop.br/site/web/blumenau/sos-unimed"  target="_blank" rel="noopener noreferrer">
                <Image src= {Sos} alt="sos" height={280} width={280}>
                </Image>
            </a></li>
            <li className="whats"><a href="https://api.whatsapp.com/send/?phone=47999010459&text=Ol%C3%A1&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Image src= {Whats} alt="whats" height={280} width={280}>
                </Image>
            </a></li>
            <li className="sac"><a href="https://www.unimed.coop.br/site/web/08006470026" target="_blank" rel="noopener noreferrer">
                <Image src= {Sac} alt="sac" height={280} width={280}>
                </Image>
            </a></li>
            <li className="contratar"><a href="https://www.unimed.coop.br/site/web/blumenau/contrate-seu-plano" target="_blank" rel="noopener noreferrer">
                <Image src= {Contratar} alt="contratar" height={280}/>
            </a></li>
            <li className="baner"><a href="https://unimedpalmas.vagas.solides.com.br/" target="_blank" rel="noopener noreferrer">
                <Image src= {Baner} alt="contratar" height={1000}>
                </Image>
            </a></li>

        </div>
    );
}