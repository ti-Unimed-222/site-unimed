'use client';
import Image from "next/image";
import Baner from './banner.png';
import Boleto from './icones/boleto.png'
import Guia from './icones/guia.png'
import Plano from './icones/plano.png'
import Portal from './icones/portal.png'
import Fale from './icones/fale.png'
import Atendimento from './icones/deficiente.png'
import './servicos.css'

export default function Servicos () {
    return (
        <div className="servicos-container">
            <div className="baner">
                <Image src={Baner} alt="baner" width={10000}/>
            </div>
            <div className="services-items">
                <li className="boleto">
                <a href="https://boleto.unimedpalmas.coop.br/" target="_blank" rel="noopener noreferrer">
                    <Image src={Boleto} alt="boleto" />
                </a>
                </li>
                <li className="guia">
                <a href="https://portal.unimedpalmas.coop.br/pls_paginaGuiaMedico.jsp" target="_blank" rel="noopener noreferrer">
                    <Image src={Guia} alt="guia" />
                </a>
                </li>
                <li className="plano">
                <a href="https://portal.unimedpalmas.coop.br/pls_paginaGuiaMedico.jsp" target="_blank" rel="noopener noreferrer">
                    <Image src={Plano} alt="plano" />
                </a>
                </li>
                <li className="portal">
                <a href="https://portal.unimedpalmas.coop.br/" target="_blank" rel="noopener noreferrer">
                    <Image src={Portal} alt="portal" />
                </a>
                </li>
                <li className="fale">
                <a href="https://unimedpalmas.coop.br/atendimento">
                    <Image src={Fale} alt="fale" />
                </a>
                </li>
            </div>
        </div>

    );
}