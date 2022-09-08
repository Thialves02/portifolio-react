import React from 'react'
import './Sobre.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faEnvelope, faUsers, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Sobre() {
    return (
        <>
        <div class="container-sobre-mim" id='sobre'>
            <h4 data-anime='top'>Sobre mim</h4>
            <p data-anime='top'>
                Amante da tecnologia, focado em aprender e usar a tecnologia para tornar o mundo um lugar melhor. Dei inicio a minha jornada em desenvolvimento no ano de 2021 quando entrei na Blue Edtech, onde pude aprender as principais tecnologias de fullstack, desenvolvi projetos reais em grupo para empresas parceiras e tive aulas sobre SoftSkills.<br></br>
                • Possuo experiência em desenvolvimento front end como freelancer e em tempo integral.<br></br>
                • Desenvolvo aplicações Web utilizando HTML5, CSS3, SASS, Javascript, JQuery, ReactJs (React Hooks, Router Dom, Context), Jest, MYSQL, Git, GitHub, APIS REST e FIGMA.<br></br>
                • Atualmente estou focado em aprimorar minhas habilidades em UI/UX utilizando figma, boas práticas e melhores formas de codificação em Javascript e React.<br></br>
            </p>
            <div className='container-informacoes' data-anime='bottom'>
                <div className='informacao' >
                    <div className='info-icons'>
                        <FontAwesomeIcon icon={faSmile}/>
                    </div>
                    <h5>Meu Nome</h5>
                    <h6>Thiago Roberto</h6>
                </div>
                <div className='informacao'>
                    <div className='info-icons'>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </div>
                    <h5>E-mail</h5>
                    <h6>thiago.ralves02@gmail.com</h6>
                </div>
                
                <div className='informacao'>
                    <a href="https://www.linkedin.com/in/thiago-roberto/" target="_blank">
                        <div className='info-icons'>
                            <FontAwesomeIcon icon={faUsers}/>
                        </div>
                        <h5>Linkedin</h5>
                        <h6>thiago-roberto</h6>
                    </a>
                </div>
                <div className='informacao'>
                    <div className='info-icons'>
                        <FontAwesomeIcon icon={faPhone}/>
                    </div>
                    <h5>Telefone</h5>
                    <h6>(12) 99125-1391</h6>
                </div>
            </div>
        </div>
        </>
    )
}
