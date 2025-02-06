'use client';
import './container.css'

export default function Container() {
    return (
    <div className="container-class">
        <div className="cont">
            <div className="textos">
                <li className="programas">
                    <h1 className="prog">Programas</h1>
                    <h3 className="prog-text">Esta é uma forma que temos de cuidar de você.<br/>Conheça nossos programas!</h3>
                    <button className="acesso"><a href = "#ok" target="_blank" rel="noopener noreferrer"/>Acessar</button>
                </li>
                <li className="sustentabilidade">
                    <h1 className="sust">Programas</h1>
                    <h3 className="sust-text">Acreditamos no envolvimento de todas as partes<br/>Cinteressadas para o alcance de melhores práticas.</h3>
                    <button className="acesso"><a href = "#ok" target="_blank" rel="noopener noreferrer"/>Acessar</button>
                </li>
                <li className="trabalhe">
                    <h1 className="trab">Programas</h1>
                    <h3 className="trab-text">Acreditamos na diversidade e inclusão. Nossas vagas<br/>estão disponíveis para pessoas com deficiência.</h3>
                    <button className="acesso"><a href = "#ok" target="_blank" rel="noopener noreferrer"/>Acessar</button>
                </li>
            </div>
        </div>
    </div>
    );
}