import close from '../assets/close.svg'
import '../styles/boxmodel.style.css'
const BoxModel = (props) =>{
  const {src, texto, color, value} = props;
  return (
    <div className="box">
      <img src={close} alt="close" />
      <img src={src} alt="" />
      <h3>{texto}</h3>
      <button style={{boxShadow: `0 5px 5px 0 ${color}`, background: color}}>{value}</button>
    </div>
  )
}

export default BoxModel;