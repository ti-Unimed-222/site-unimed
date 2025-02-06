'use client';
import './container.css'

export default function Container() {
    return (
    <div className="container-class">
        <div className="cont">
            <div className="textos">
                <li className="programas">
                    <h1 className="prog">Programas</h1>
                    <h3 className="prog-text">Esta é uma forma que temos de cuidar de você.<br/><span style={{ display: 'block', marginTop: '-8px'}} />Conheça nossos programas!</h3>
                    <button className="acesso"><a href = "#ok" target="_blank" rel="noopener noreferrer"/>Acessar</button>
                </li>
                <li className="sustentabilidade">
                    <h1 className="sust">Sustentabilidade</h1>
                    <h3 className="sust-text">Acreditamos no envolvimento de todas as partes<br/><span className='linha2'style={{ display: 'block', marginTop: '-8px'}} />interessadas para o alcance de melhores práticas.</h3>
                    <button className="acesso"><a href = "#ok" target="_blank" rel="noopener noreferrer"/>Acessar</button>
                </li>
                <li className="trabalhe">
                    <h1 className="trab">Trabalhe conosco</h1>
                    <h3 className="trab-text">Acreditamos na diversidade e inclusão. Nossas vagas<br/><span className='linha2'style={{ display: 'block', marginTop: '-8px'}} />estão disponíveis para pessoas com deficiência.</h3>
                    <button className="acesso"><a href = "#ok" target="_blank" rel="noopener noreferrer"/>Acessar</button>
                </li>
            </div>
        </div>
    </div>
    );
}