import React from 'react';
import Button from '../Button/Button';

export default function Projeto({projeto}) {
    return (
        <>
          <div className="projeto">
            <div className="projeto-infos">
              <h8>{projeto.nome}</h8>
              <h9>{projeto.cargo}</h9>
              <h10>{projeto.descricao}</h10>
              <h11>Tecnologias: {projeto.tecnologias}</h11>
              <div className="projeto-button">
                {projeto.site !== "" && (
                  <Button
                  href={projeto.site}
                  target="_blank"
                  rel="noreferrer"
                  >
                    Visitar o site  
                  </Button>
                )}
                {projeto.repositorio !== "" && (
                  <Button
                  href={projeto.repositorio}
                  target="_blank"
                  rel="noreferrer"
                  >
                    Ir ao repositório  
                  </Button>
                )}
              </div>
            </div>
            <img src={projeto.imagem} alt={projeto.nome}/>
          </div>
        </>
      );
}