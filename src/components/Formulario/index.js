import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import './Formulario.css'

const Formulario = (props) => {

 


  const [nome,setNome] = useState('');
  const [cargo,setCargo] = useState('');
  const [imagem,setImagem] = useState('');
  const [time,setTime] = useState('');

  const aoSalvar = (event) => {
    event.preventDefault();


    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card dos funcionários</h2>
        <CampoTexto
          obrigatorio={true}
           label="Nome"
            placeholder="Digite seu nome" 
            valor={nome}
            aoAlterado={valor => setNome(valor)}
            />

        <CampoTexto
         obrigatorio={true}
          label="Cargo"
           placeholder="Digite seu cargo" 
            valor={cargo}
            aoAlterado={valor => setCargo(valor)}
            />
        <CampoTexto
         obrigatorio={true}
          label="Imagem"
           placeholder="Digite o endereço de imagem"
            valor={imagem}
            aoAlterado={valor => setImagem(valor)}
            />
        <ListaSuspensa
         obrigatorio={true}
          label="Time"
           itens={props.times}
           aoAlterado={valor => setTime(valor)} />
        <Botao>
          Criar card
        </Botao>
      </form>
    </section>
  )
}

export default Formulario