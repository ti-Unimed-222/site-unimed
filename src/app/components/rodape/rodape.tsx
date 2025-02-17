import './rodape.css'

import Image from 'next/image'
import Ans from './ans.png'
import Coop from './coop.png'
import AnsN from './ansn.png'
import { Phone, Clock, Mail } from 'lucide-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Facebook from './siga/facebook.png'
import Instagram from './siga/instagram.png'
import X from './siga/x.png'
import Linkedin from './siga/linkedin.png'
import AppStore from './siga/appstore.png'
import PlayStore from './siga/playstore.png'
export default function Rodape() {
    return (
        <div className="rodape">
            
            <div className='linha-divisao'>
            <div className='centrais'>
                <div className='centrais-container1'>
                    <li className='title'>Centrais de Atendimento</li>
                    <li className='info-phone'>
                        <Phone className='phone' />
                        (63) 3025-5800 - Telefone
                    </li>
                    <li className='info-whats
                    '>
                        <FontAwesomeIcon icon={faWhatsapp} className='whatsapp'/>
                        (63) 3025-5810 - WhatsApp
                    </li>
                    <li className='info-clock'>
                        <Clock className='clock' />
                        De segunda à sexta-feira<br/>das 08:00h às 18:00h
                    </li>
                    <li className='info-mail'>
                        <Mail className='mail' />
                        Email:<br/>atendimento@unimedpalmas.com.br
                    </li>
                </div>
                <div className='centrais-container2'>
                    <li className='title2'>Central de Vendas </li>
                    <li className='info-phone2'>
                        <Phone className='phone' />
                        (63) 3215-4090
                    </li>
                    <li className='info-clock2'>
                        <Clock className='clock2' />
                        De segunda à sexta-feira<br/>das 08:00h às 18:00h
                    </li>
                </div>
            </div>
            <div className='siganos'>
                <li className='siganos-title'>Siga nossas redes sociais:</li>
                    <li className='apps'>
                        <a href='https://www.facebook.com/unimedpalmas/' target='_blank' rel='noopener noopener'><Image src={Facebook} alt='facebook' /></a>
                        <a href='https://www.instagram.com/unimedpalmas/' target='_blank' rel='noopener noreferrer'><Image src={Instagram} alt='Instagram' /></a>
                        <a href='https://x.com/i/flow/login?redirect_after_login=%2Funimedpalmas'target='_blank' rel='noopener noreferrer'> <Image src={X} alt='X' /></a>
                        <a href='https://www.linkedin.com/company/unimed-palmas-cooperativa-de-trabalho-medico-ltda/' target='_blank' rel='noopener noreferrer'><Image src={Linkedin} alt='Linkedin' /></a>
                    </li>
                    <li className='siganos-title'>Baixe nosso aplicativo:</li>
                    <li className='apps'>
                        <a href='https://apps.apple.com/br/app/unimed-cliente/id1458902471' target='_blank' rel='noopener noreferrer'><Image src={AppStore} alt='AppStore' /></a>
                        <a href='https://play.google.com/store/apps/details?id=br.coop.unimed.cliente&hl=pt-BR&pli=1' target='_blank' rel='noopener noreferrer'><Image src={PlayStore} alt='PlayStore' /></a>
                    </li>
            </div>
            </div>
            <div className='rodape2'>
                <li className='coop'>
                    <a href='https://www.somos.coop.br/' target='_blank' rel='noopener noreferrer'><Image src={Coop} width={1000} alt='coop' /></a>
                </li>
                <li className='ans'>
                    <a href='https://www.gov.br/ans/pt-br' target='_blank' rel='noopener noreferrer'><Image src={Ans} alt='ans'width={1000} /></a>
                </li>
                <li className='ansn'>
                    <Image src={AnsN}  alt='ansn' width={1000}/>
                </li>
                <div className='data'>
                <li>
                    2025 Unimed Palmas - Todos os direitos reservados
                </li>
                </div>
            </div>
        </div>
    );
}