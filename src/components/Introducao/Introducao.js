import React from 'react'
import './Introducao.css'
import homeImg from '../../assets/images/home-image.svg'
import curriculo from '../../assets/images/curriculo.pdf'
export default function Introducao() {
    return (
        <div className="container-home">
            <div>
                <h2 >Olá, eu sou o <br/><h2 className='line type-animation'> Thiago Roberto :)</h2></h2>
                <h3>Desenvolvedor Fullstack</h3>
                <a href={curriculo} download='curriculo.pdf' target='_blank'><button className="btn-download">Download CV</button></a>
                <a href='#container-contato'><button className='btn-contato'>Entrar em contato</button></a>
            </div>
            <div>
            <img src={homeImg}/>
            </div>
        </div>
    )
}
