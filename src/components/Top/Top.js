import React, { useEffect, useState } from 'react'
import './Top.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Top() {
    const [blackHeader,setBlackHeader] = useState(false);
    useEffect(() =>{
        const scrollListener = () =>{
            if(window.scrollY > 400) {
                setBlackHeader(true)
            }else{
                setBlackHeader(false)
            }
        }
        window.addEventListener('scroll',scrollListener)
        return() =>{
            window.removeEventListener('scroll',scrollListener)
        }
    },[]);

    const Top = () =>{
        window.scrollTo(0,0)
    }
    
    return (
        <div className={blackHeader ? 'show' : 'hidden'} onClick={Top}>
            <FontAwesomeIcon icon={faArrowUp}/>
        </div>
    )
}
