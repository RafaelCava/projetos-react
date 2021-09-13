import { useState } from 'react';
import '../styles/boxModel.style.css'
const BoxModel = (props) => {
  let [seguir, setSeguir] = useState('seguir')
    const [seguidores, setSeguidores] = useState(props.seguidores)
  
    const addSeguidor = () => {
      setSeguidores(seguidores + 1)
    }
  
    const removerSeguidor = () => {
      setSeguidores(seguidores - 1)
    }
  
    const handleSeguir = () => {
      seguir === 'seguir' ? setSeguir(seguir = 'seguindo') : setSeguir(seguir = 'seguir'); 
    }
  return (
    <div className="boxModel">
      <div className="info">
        <img src={props.src} alt="Foto" />
        <h2>{props.nome}</h2>
        <h4>{props.profile}</h4>
        <p>{seguidores} <span>Seguidores</span></p>
        <p>{props.seguindo} <span>Seguindo</span></p>
      </div>
      {
        seguir === 'seguir'
        ?
        <button className='seguir botao' onClick={() => { 
          handleSeguir()
          addSeguidor()
        }}>Seguir</button>
        :
        <button className='seguindo botao' onClick={()=>{
          handleSeguir()
          removerSeguidor()
        }}>Seguindo</button>
      }
    </div>
  )
}

export default BoxModel;