import { useState } from 'react'
import '../styles/BoxModel.style.css'
const BoxModel = (props) => {

  let [contagem, setContagem] = useState(0)

  const addItem = () =>{
    setContagem(contagem + 1)
  }
  const removerItem = () =>{
    contagem !== 0 
    ?
    setContagem(contagem - 1)
    :
    contagem = 0;
  }

  return (
    <div className="BoxModel">
      <img src={props.src} alt='foto' />
      <h1>{props.item}</h1>
      <h3>{props.componentes}</h3>
      <div className="contagem">
        <button onClick={removerItem}>-</button>
        <span>{contagem}</span>
        <button onClick={addItem}>+</button>
      </div>
    </div>
  )
}

export default BoxModel;