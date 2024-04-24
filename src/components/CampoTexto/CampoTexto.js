import './CampoTexto.css'


const CampoTexto = (props) => {

    const placeHolder = `${props.placeholder}...`;

    

    const aoDigitado = (event) => {
      props.aoAlterado(event.target.value);
    }

  return (
    <div className="campo-texto">
        <label>{props.label}</label>
        <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeHolder} type="text" />
    </div>
  )
}

export default CampoTexto