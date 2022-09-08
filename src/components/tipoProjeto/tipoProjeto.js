import React, { useContext } from 'react';
import { Context } from "../../context/CtxApp";
import "./tipoProjeto.css";

export default function TipoProjeto({tipo,descricao}) {
    const { tipoProjeto, setTipoProjeto } = useContext(Context);

    const alteraTipoProjeto = (tipo) => {
        setTipoProjeto(tipo)
    }
    
    return (
        <>
        {tipoProjeto == '' && (
          <div className='tipoProjeto' onClick={() => alteraTipoProjeto(tipo)} >
            <h2>{tipo}</h2>
            <p>{descricao}</p>
          </div>
        )}   
        </>
      );
}