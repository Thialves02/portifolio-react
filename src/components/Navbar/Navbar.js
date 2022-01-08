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
                <li>Sobre mim</li>
                <li>Projetos</li>
                <li>Serviços</li>
                <li>Minhas skills</li>
            </ul>
        </header>
        </>
    )
}
