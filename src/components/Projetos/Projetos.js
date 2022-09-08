import React, { useState,useContext } from "react";
import { Context } from "../../context/CtxApp";
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
import qualNumero from "../../assets/images/qualNumero.gif";
import Projeto from "../Projeto/Projeto";
import TipoProjeto from "../tipoProjeto/tipoProjeto";
import foodWebApp from "../../assets/images/foodWebApp.gif";
import landingPage from "../../assets/images/landingPage.jpg";
import cadastroUsuario from "../../assets/images/cadastroUsuario.jpg"

import Button from "../Button/Button";

export default function Projetos() {
  const [projects] = useState([
    {
      nome: "Qual o número?",
      cargo: "Desenvolvedor Front-end",
      descricao:
        "Projeto com intuito de trabalhar a memória e a lógica do usuário, fazendo com ele memorize os seus palpites e raciocine corretamente sua próxima tentativa. Para vencer o jogo é necessário que o usuário acerte um número entre 1 e 300 que é gerado aleatoriamente por uma API.",
      tecnologias: "HTML, CSS, JavaScript, JEST e Git",
      imagem: qualNumero,
      site: "https://studio-sol-thi.netlify.app",
      repositorio: "https://github.com/Thialves02/Studio-Sol"
    },
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

  const figma = [
    {
      nome: "Food Web App",
      cargo: "UI/UX",
      descricao:
        "O projeto consiste em uma home page de comidas dinâmica, que ao clicar nos botões o cenário se altera.O intuito foi aprender mais sobre animações e desenvolvimento de wireframes com Figma.",
      tecnologias: "Figma",
      imagem: foodWebApp,
      site: "https://www.figma.com/file/xYAePZznywGl6jXILqKW52/Food-Web-App?node-id=0%3A1",
      repositorio: ""
    },
    {
      nome: "Landing Page",
      cargo: "UI/UX",
      descricao:
        "Esse projeto consiste em uma Landing Page, onde eu pude aprender mais sobre armonização das cores e em como utilizar as ferramentas da plataforma de uma forma mais eficiente.",
      tecnologias: "Figma",
      imagem: landingPage,
      site: "https://www.figma.com/file/4ymrD3nbBOF57Za2vOdZjB/Landing-Page?node-id=0%3A1",
      repositorio: ""
    },
    {
      nome: "Cadastro de usuário",
      cargo: "UI/UX",
      descricao:
        "Projeto onde pude aprender sobre o uso das cores e seus contrastes, noção de espaço entre elementos, hierarquia visual e escala de elementos.",
      tecnologias: "Figma",
      imagem: cadastroUsuario,
      site: "https://www.figma.com/file/aeiBZ2pSDCezPQu6ViDZHt/Tela-de-Login%2FRegistro?node-id=0%3A1",
      repositorio: ""
    },
  ]

  const [start, setStart] = useState(0);

  const { tipoProjeto, setTipoProjeto } = useContext(Context);

  const voltaProjetos = () => {
    setTipoProjeto('')
    setStart(0)
  }

  const aumenta = () => {
    var tamanhoProjeto
    tipoProjeto == 'Web' ?  tamanhoProjeto = projects.length : tamanhoProjeto = figma.length
    if (start === tamanhoProjeto - 1) {
      setStart(0);
    } else {
      setStart(start + 1);
    }
  };

  const diminuir = () => {
    var tamanhoProjeto
    tipoProjeto == 'Web' ?  tamanhoProjeto = projects.length : tamanhoProjeto = figma.length
    if (start === 0) {
      setStart(tamanhoProjeto - 1);
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
        {tipoProjeto != '' && (
          <div className="icon-projeto-left">
            <FontAwesomeIcon icon={faArrowLeft} onClick={diminuir} />
          </div>
        )}

        {tipoProjeto == '' && (
        <div className="align-div-flex tipoProjetos">
          <TipoProjeto
            tipo={'Web'}
            descricao={`
            Projetos feitos com intuito de aprimorar minhas habilidades como Desenvolvedor Front end.
            `}
          />
          <TipoProjeto
            tipo={'Figma'}
            descricao={`
            Projetos feitos com intuito de aprimorar minhas habilidades como UI/UX designer.
            `}
          />
        </div>
        )}
      
        {tipoProjeto != '' && (
          <div className="align-div-col">
            <Projeto
              projeto={tipoProjeto == 'Web' ? projects[start] : figma[start]}
            />
            <Button
              component="button"
              onClick={() => voltaProjetos()}
            >
              VOLTAR
            </Button>
        </div>
        )
        }
        {tipoProjeto != '' && (
        <div className="icon-projeto-right">
          <FontAwesomeIcon icon={faArrowRight} onClick={aumenta} />
        </div>
        )}
      </div>
    </>
  );
}
