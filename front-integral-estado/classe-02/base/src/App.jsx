import BoxModel from "./components/BoxModel";
import imageProfile from './assets/kelvin-costa.png'
import './styles/App.style.css'

function App() {
  return (
    <div className="App">
      <BoxModel src={imageProfile} nome="Kelvin Costa" profile="@costa" seguidores={140} seguindo={207}/>
    </div>
  );
}

export default App;
