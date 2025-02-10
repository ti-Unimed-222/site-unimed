import './rodape.css'
import Image from 'next/image'
import Ans from './ans.png'
import Coop from './coop.png'
import AnsN from './ansn.png'

export default function Rodape() {
    return (
        <div className="rodape">
            <div className='rodape1'>
                <div className="rodape-container">
                    <div className="unimed">
                        <li className='titulos'>Unimed</li>
                        <li className='line'>Sobre Nós</li>
                        <li className='line'>Ouvidoria</li>
                        <li className='line'>Fale Conosco</li>
                        <li className='line'>Trabalhe Conosco</li>
                        <li className='line'>ANS</li>
                    </div>
                    <div className="Beneficiários">
                        <li className='titulos'>Beneficiários</li>
                        <li className='line'>Guia Médico</li>
                        <li className='line'>Portal do Beneficiário</li>
                        <li className='line'>Serviços ao Cliente</li>
                        <li className='line'>RES - Registro Econômico de Saúde</li>
                    </div>
                    <div className="Cooperados">
                        <li className='titulos'>Cooperados</li>
                        <li className='line'>Portal TISS</li>
                        <li className='line'>TUSS - FAQ</li>
                    </div>
                    <div className="Prestadores">
                        <li className='titulos'>Prestadores</li>
                        <li className='line'>Acesso Restrito</li>
                        <li className='line'>Portal TISS</li>
                        <li className='line'>Autorizador</li>
                        <li className='line'>Serviço de Atenção à Saúde</li>
                        <li className='line'>Rede Prestadora</li>
                        <li className='line'>Substituição de Prestadores</li>
                    </div>
                    <div className="Imprensa">
                        <li className='titulos'>Imprensa</li>
                        <li className='line'>Notícias</li>
                        <li className='line'>Contato</li>
                    </div>
                </div>
            </div>
            <div className='rodape2'>
                <li className='coop'>
                    <Image src={Coop} alt='coop' />
                </li>
                <li className='ans'>
                    <Image src={Ans} alt='ans' />
                </li>
                <li className='ansn'>
                    <Image src={AnsN}  alt='ansn' />
                </li>
                <li className='data'>
                    2025 Unimed Palmas - Todos os direitos reservados
                </li>
            </div>
        </div>
    );
}