import BoxModel from "./components/BoxModel";
import hamburguer from './assets/hamburguer.png'
import './styles/App.style.css'
function App() {
  return (
    <div className="App">
      <BoxModel src={hamburguer} item='Hamburguer' componentes='Arcu, sagittis, ut lectus 
congue dapibus semper odio a, lobortis.'/>
    </div>
  );
}

export default App;
