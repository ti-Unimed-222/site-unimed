'use client';
import React, {useState} from 'react';
import Image from "next/image";
import Imagem from './fundo.png'
import Familia from './familia.png'
import Trabalho from './trabalho.png'
import './fundo.css'


const Fundo = () => {
    const [hovered, setHovered] = useState<string | null>(null);
    return (
        <div className="fundo">
            <div className="imagem">
                <div className="overlay"></div>
                <div className="planos">
                    <li className="text1"><br /><h1>Cuidar de você.</h1></li>
                    <li className="text11"><br /><h1>Esse é o plano.</h1></li>
                    <li className="text2">
                        <h3>Escolha seu perfil e faça uma simulação para encontrar o<br />
                            <span style={{ display: 'block', marginTop: '18px' }} /> melhor plano pra você.
                        </h3>
                    </li>
                    <button className="botão">
                        <a href="https://preproducao.unimed.coop.br/site/planos" target="_blank" rel="noopener noreferrer">
                            Ver todos os planos
                        </a>
                    </button>
                </div>
                
                <div className="containers">
                <div
                    className={`container1 ${hovered === 'container1' ? 'hovered' : ''} ${hovered && hovered !== 'container1' ? 'reduced' : ''}`}
                    onMouseEnter={() => setHovered('container1')}
                    onMouseLeave={() => setHovered(null)}
                >
                        <div className="familia">
                            <Image src={Familia} alt="familia" style={{ border: '5px', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }} />
                            <li className="texto1">
                                <h3>Plano individual ou familiar para<br />
                                    <span style={{ display: 'block', marginTop: '0px' }} /> cuidar bem da sua saúde e da<br />
                                    <span style={{ display: 'block', marginTop: '0px' }} /> saúde de quem você ama.
                                </h3>
                            </li>
                            <button className="saibamais">
                                <a href="https://preproducao.unimed.coop.br/site/planos" target="_blank" rel="noopener noreferrer">
                                    Quero saber mais
                                </a>
                            </button>
                        </div>
                    </div>
                    <div
                    className={`container2 ${hovered === 'container2' ? 'hovered' : ''} ${hovered && hovered !== 'container2' ? 'reduced' : ''}`}
                    onMouseEnter={() => setHovered('container2')}
                    onMouseLeave={() => setHovered(null)}
                >
                        <div className="trabalho">
                            <Image src={Trabalho} alt="trabalho" style={{ border: '5px', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }} />
                            <li className="texto1">
                                <h3>Plano empresarial para garantir <br />
                                    <span style={{ display: 'block', marginTop: '0px' }} /> os cuidados necessários e o bem-<br />
                                    <span style={{ display: 'block', marginTop: '0px' }} /> estar de todos.
                                </h3>
                            </li>
                            <button className="saibamais">
                                <a href="https://preproducao.unimed.coop.br/site/planos" target="_blank" rel="noopener noreferrer">
                                    Quero saber mais
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fundo;