import React from 'react'
import './Sobre.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Sobre() {
    return (
        <>
        <div class="container-sobre-mim" id='sobre'>
            <h4 data-anime='top'>Sobre mim</h4>
            <p data-anime='top'>Atualmente tenho 19 anos, sempre fui apaixonado por programação e em 2021 resolvi entrar na Blue Edtech, onde pude aprender Python, Html, CSS, Javascript, React, Nest, Banco de dados e SoftSkills.
                No momento tenho experiência com trabalhos como freelancer para duas empresas e também adquiri conhecimento sobre Metodologias Ágeis e Git Flow através de um Bootcamp em grupo.
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
                <a href="https://www.linkedin.com/in/thiago-roberto/" target="_blank">
                <div className='informacao'>
                    <div className='info-icons'>
                        <FontAwesomeIcon icon={faUsers}/>
                    </div>
                    <h5>Linkedin</h5>
                    <h6>thiago-roberto</h6>
                </div>
                </a>
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
