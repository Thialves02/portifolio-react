import React, { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [click, setClick] = useState(true)

    const close = () =>{
        setClick(!click)
    }

    return (
        <>
        <header className={click ? '' : 'open-header'}>
            <label className="checkbtn" onClick={close}>
                <FontAwesomeIcon icon={click ? faBars : faTimes} />
            </label>
            <h1>Portifólio</h1>
            <ul className={click ? 'header ul' : 'open'}>
                <a href="#sobre" onClick={close}><li>Sobre mim</li></a>
                <a href="#projetos" onClick={close}><li>Projetos</li></a>
                <a href="#servicos" onClick={close}><li>Serviços</li></a>
                <a href="#skills" onClick={close}><li>Minhas skills</li></a>
                <a href="#container-contato" onClick={close}><li>Contato</li></a>
            </ul>
        </header>
        </>
    )
}
