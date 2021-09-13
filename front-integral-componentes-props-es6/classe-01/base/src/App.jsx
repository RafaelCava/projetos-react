import './styles/App.styles.css'
import BoxModel from './components/BoxModel'
import cookie from './assets/cookie.svg';
import alert from './assets/alert.svg';
const App = () => {
  return (
    <div className="App">
      <BoxModel src={cookie} texto='Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.' color='#ED6755' value='Tudo bem!'/>
      <BoxModel src={alert} texto='Você será deslogado imediatamente!' color='#1C1B5E' value='Extender login'/>
    </div>
  );
}

export default App;
