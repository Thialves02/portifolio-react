import Contato from '../components/Contato/Contato';
import Footer from '../components/Footer/Footer';
import Introducao from '../components/Introducao/Introducao';
import Navbar from '../components/Navbar/Navbar';
import Projeto from '../components/Projetos/Projeto';
import Servicos from '../components/Servicos/Servicos';
import Skills from '../components/Skills/Skills';
import Sobre from '../components/Sobre/Sobre';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <Introducao/>
    <Sobre/>
    <Projeto/>
    <Servicos/>
    <Skills/>
    <Contato/>
    <Footer/>
    </>
  );
}

export default App;
