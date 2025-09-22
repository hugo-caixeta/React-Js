import './App.css';
import HelloWorld from './components/HelloWorld';
import Frases from './components/Frases';





function App() {

  const name = 'Hugo'
  const newName = name.toUpperCase()

  const url = "https://via.placeholder.com/150"

  function sum(a, b) {
    return a+b
  }


  return (
    <div className="App">
      <h1> Olá React</h1>
      <h2>Alterando o JSX</h2>
      <p>Olá, {name}</p>
      <p>Olá, {newName}</p>
      <p>Soma: {2+2}</p>
      <p>Soma: {sum(5,5)}</p>
      <img src={url} alt="Minha imagem"/>
      <HelloWorld/>
      {/* <Frases/> */}
    </div>
  );
}






export default App;
