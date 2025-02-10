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
                    <li className='title'>Central de Vendas </li>
                    <li className='info-phone'>
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
                        <Image src={Facebook} alt='facebook' />
                        <Image src={Instagram} alt='Instagram' />
                        <Image src={X} alt='X' />
                        <Image src={Linkedin} alt='Linkedin' />
                    </li>
                    <li className='siganos-title'>Baixe nosso aplicativo:</li>
                    <li className='apps'>
                        <Image src={AppStore} alt='AppStore' />
                        <Image src={PlayStore} alt='PlayStore' />
                    </li>
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
                <div className='data'>
                <li>
                    2025 Unimed Palmas - Todos os direitos reservados
                </li>
                </div>
            </div>
        </div>
    );
}