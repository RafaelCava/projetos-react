import './styles/App.styles.css'
import Card from './components/Card'
import kelvinPerfil from './assets/kelvin-costa.png'
import charlesPerfil from './assets/charles-santos.png'
import annaPerfil from './assets/anna-bia.png'
import marioPerfil from './assets/mario-hisashi.png'
const App = () => {
  return (
    <div className="App">
      <Card src={kelvinPerfil} nome={'Kelvin Costa'} user={'@costa'} followers={'140'} seguindo={'207'}/>
      <Card src={charlesPerfil} nome={'Charles Santos'} user={'@charles.santos'} followers={'302'} seguindo={'419'}/>
      <Card src={annaPerfil} nome={'Anna Bia'} user={'@anab'} followers={'842'} seguindo={'150'}/>
      <Card src={marioPerfil} nome={'Mario Hisashi'} user={'@hisashi'} followers={'28'} seguindo={'17'}/>
    </div>
  );
}

export default App;
