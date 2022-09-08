import React, { useRef } from 'react'
import './Contato.css'
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";
import Button from '../Button/Button';

export default function Contato() {
    const enviado = () => {  
        Swal.fire({  
          title: 'Email enviado com sucesso!',  
          icon: 'success',  
          text: 'Obrigado pelo contato ;)',  
        });  
    } 
    const error = () => {
        Swal.fire({  
            title: 'Erro ao enviar email!',  
            icon: 'error',  
            text: 'Por favor, entre em contato através de outra maneira (LinkedIn, Telefone) ;)',  
          });  
    }

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('GmailMessage', 'template_pq0fszh', form.current, 'user_GeEQ4Gwe0Y7RfLGorsrwD')
          .then(() => {
                enviado()
                e.target.reset();
          }, () => {
                error()
          });
      };
      
    return (
        <div className='container-contato' id='container-contato'>
            <div className='container-email'>
                <h13>Contato</h13>
                <form id='myform' ref={form} onSubmit={sendEmail}>
                    <div className='single-input'>
                        <input type="text" name='nome' className='input' required/>
                        <label for='nome'>Nome</label>
                    </div>
                    <div className='single-input'>
                        <input type="email" name="email" className='input' required/>
                        <label for='email'>Email</label>
                    </div>
                    <div className='single-input'>
                        <input type="text" name='telefone' className='input' required/>
                        <label for='telefone'>Telefone</label>
                    </div>
                    <div className='single-input'>
                        <textarea  name="mensagem" className='input' required></textarea>
                        <label for='assunto' className='input-mensagem'>Mensagem</label>
                    </div>
                    <Button
                    component="button"
                    type="submit"
                    >
                        ENVIAR
                    </Button>
                </form>
            </div>
            <div className='container-contatos'>
                <h14>Vamos conversar!</h14>
                <p>Fique a vontade para entrar em contato comigo, estou aberto a tirar dúvidas sobre mim ou qualquer projeto. Visite meu GitHub e meu Linkedin para saber um pouco mais sobre mim e meus projetos.</p>
                <a href="https://github.com/Thialves02" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/thiago-roberto/" target="_blank"><i className="fab fa-linkedin"></i></a>      
            </div>
        </div>
    )
}
