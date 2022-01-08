import React from 'react'
import './Servicos.css'
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Servicos() {
    return (
        <div className='container-servicos'>
            <h10>Serviços</h10>
            <div className='servicos'>
                <div className='servico' data-anime='right'>
                    <div className='servico-icon'>
                    <FontAwesomeIcon icon={faCode} />
                    </div>
                    <h11>Criação de sites</h11>
                </div>
                <div className='servico' data-anime='left'>
                    <div className='servico-icon'>
                    <FontAwesomeIcon icon={faMobile} />
                    </div>
                    <h11>Sites responsivos</h11>
                </div>
            </div>
        </div>
    )
}
