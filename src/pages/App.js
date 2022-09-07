import Contato from '../components/Contato/Contato';
import Footer from '../components/Footer/Footer';
import Introducao from '../components/Introducao/Introducao';
import Navbar from '../components/Navbar/Navbar';
import Projetos from '../components/Projetos/Projetos';
import Servicos from '../components/Servicos/Servicos';
import Skills from '../components/Skills/Skills';
import Sobre from '../components/Sobre/Sobre';
import Top from '../components/Top/Top';
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Introducao/>
      <Sobre/>
      <Projetos/>
      <Servicos/>
      <Skills/>
      <Contato/>
      <Top/>
      <Footer/>
    </>
  );
}

export default App;
