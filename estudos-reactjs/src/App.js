import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';





function App() {

  const nome = 'Maria'

  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome='Hugo'/>
      <SayMyName nome={nome}/>
      <Pessoa nome='Fernando' idade='22' profissao='Barbeiro' />
    </div>
  );
}






export default App;
