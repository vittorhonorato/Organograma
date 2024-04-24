import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    

  return (
    <div className='lista-suspensa'>
        <label>{props.label}</label>
        <select onChange={event => props.aoAlterado(event.target.value)} required={props.required} value={props.valor}>
          <option value=""></option>
           {props.itens.map((item,i) => <option key={i}>{item}</option>)}
        </select>
    </div>
  )
}

export default ListaSuspensa