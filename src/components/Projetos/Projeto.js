import React, { useState } from "react";
import "./Projetos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import pokeapi from "../../assets/images/pokeapi.png";
import blue from "../../assets/images/Blueshoes.png";
import AB from "../../assets/images/ambiental_bueno.png";
import deezer from "../../assets/images/deezer.png";
import website from "../../assets/images/website.png";
import recipe from "../../assets/images/recipes.png";
import login from "../../assets/images/login.png";
import loki from "../../assets/images/loki.png";
import assistir from "../../assets/images/assistir.png";

export default function Projeto() {
  const [projects] = useState([
    {
      nome: "Poke API",
      cargo: "Desenvolvedor Front-end",
      descricao:
        "Desenvolvi essa aplicação com o objetivo de aprender sobre LocalStorage e InifiteScroll",
      tecnologias: "React, CSS e Git",
      imagem: pokeapi,
      site: "thi-pokeapi.netlify.app",
      repositorio: "https://github.com/Thialves02/Pokeapi",
    },
    {
      nome: "Blue Shoes",
      cargo: "Desenvolvedor Fullstack",
      descricao:
        "Projeto feito para o Bootcamp da Blue Edtech. A proposta do site é ser um ecommerce de tênis onde o usuário só precisa disponibilizar suas informações quando for finalizar a compra, fazendo com que o site retenha mais usuários. O projeto foi feito por mim e mais 5 programadores para a empresa OSF Digital.",
      tecnologias: "React, Nest, CSS e Git",
      imagem: blue,
      site: "",
      repositorio: "https://github.com/lucasmbrute2/blue-Shoes-ReactJs",
    },
    {
      nome: "Ambiental Bueno",
      cargo: "Desenvolvedor Front-end",
      descricao:
        "Esse foi o meu projeto como desenvolvedor front-end freelancer. Ao decorrer do projeto pude aprender a me organizar melhor, versionar meus códigos, como utilizar bibliotecas externas e sobre responsividade e acessibilidade para usuários mobile.",
      tecnologias: "HTML, CSS, Bootstrap, Git",
      imagem: AB,
      site: "https://ambientalbueno.com.br",
      repositorio: "",
    },
    {
      nome: "Projeto Deezer",
      cargo: "Desenvolvedor Front-end",
      descricao:
        'O projeto tem como objetivo simular o tocador de músicas "Deezer". O usuário pode ouvir, pesquisar e favoritar músicas. Para realizar o projeto durante o tempo determinado eu utilizei o Jira para gerenciar o tempo e as tarefas que deveriam ser feitas',
      tecnologias: "React e CSS",
      imagem: deezer,
      site: "https://thi-deezer-clone.netlify.app",
      repositorio: "https://github.com/Thialves02/deezer-clone",
    },
    {
      nome: "Website",
      cargo: "Desenvolvedor Front-end",
      descricao:
        "Projeto feito a fim de reforçar o conhecimento em React e aprender sobre React Router Dom, além de aprender sobre inglês técnico através do tutorial.",
      tecnologias: "React e CSS",
      imagem: website,
      site: "",
      repositorio: "https://github.com/Thialves02/website-tutorial-react",
    },
    {
      nome: "Recipe App",
      cargo: "Desenvolvedor Front-end",
      descricao:
        "Primeiro projeto feito em React consumindo uma API externa. O projeto consiste em um site de busca de receitas disponibilizadas pela API.",
      tecnologias: "React e CSS",
      imagem: recipe,
      site: "",
      repositorio: "https://github.com/Thialves02/recipe-app",
    },
    {
      nome: "Login Screen",
      cargo: "Desenvolvedor Front-end",
      descricao:
        "Projeto feito a fim de reforçar os conhecimentos de CSS e responsividade.",
      tecnologias: "HTML e CSS",
      imagem: login,
      site: "",
      repositorio: "https://github.com/Thialves02/login",
    },
    {
      nome: "Loki Screen",
      cargo: "Desenvolvedor Front-end",
      descricao:
        "Projeto feito a fim de reforçar os conhecimentos de CSS e responsividade.",
      tecnologias: "HTML e CSS",
      imagem: loki,
      site: "",
      repositorio: "https://github.com/Thialves02/Loki",
    },
    {
      nome: "Viagem de Chihiro",
      cargo: "Desenvolvedor Front-end",
      descricao:
        "Projeto feito a fim de reforçar os conhecimentos de CSS e responsividade.",
      tecnologias: "HTML e CSS",
      imagem: assistir,
      site: "",
      repositorio: "https://github.com/Thialves02/assistir_codelandia",
    },
  ]);

  const [start, setStart] = useState(0);

  const aumenta = () => {
    if (start === projects.length - 1) {
      setStart(0);
    } else {
      setStart(start + 1);
    }
  };

  const diminuir = () => {
    if (start === 0) {
      setStart(projects.length - 1);
    } else {
      setStart(start - 1);
    }
  };

  return (
    <>
      <h7 className="container-projetos-title" id="projetos">
        Projetos
      </h7>
      <div className="projeto">
        <div className="icon-projeto-left">
          <FontAwesomeIcon icon={faArrowLeft} onClick={diminuir} />
        </div>
        <div className="projeto-infos">
          <h8>{projects[start].nome}</h8>
          <h9>{projects[start].cargo}</h9>
          <h10>{projects[start].descricao}</h10>
          <h11>Tecnologias: {projects[start].tecnologias}</h11>
          <div className="projeto-button">
            {projects[start].site != "" && (
              <a href={projects[start].site}>
                <button>Visitar o site</button>
              </a>
            )}
            {projects[start].repositorio != "" && (
              <a href={projects[start].repositorio} target="_blank">
                <button>Ir ao repositório</button>
              </a>
            )}
          </div>
        </div>
        <img src={projects[start].imagem} />
        <div className="icon-projeto-right">
          <FontAwesomeIcon icon={faArrowRight} onClick={aumenta} />
        </div>
      </div>
    </>
  );
}
