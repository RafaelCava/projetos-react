import './styles/App.styles.css'
import BoxModel from './components/BoxModel'
import cookie from './assets/cookie.svg';
const App = () => {
  return (
    <div className="App">
      <BoxModel src={cookie} texto='Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.' color='#ED6755' value='Tudo bem!'/>
    </div>
  );
}

export default App;
