import React, {useState, useEffect} from "react";
import './App.css';
import Axios from 'axios';

function App() {
  const [cor, setCor] = useState("");
  const [portas, setPortas] = useState("");
  const [potencia, setPotencia] = useState("");
  const [tipoTeto, setTipoTeto] = useState("");
  const [tecidoBanco, setTecidoBanco] = useState("");

  const submitReview = () => {
      Axios.post('http://localhost:3001/api/insert', {
        cor: cor,
        portas:portas,
        potencia:potencia,
        tipoTeto:tipoTeto,
        tecidoBanco:tecidoBanco,
      }).then(() => {
          alert('sucesso');
      });
  };

  return (
    <div className="App">
      <h1>Personalize seu carro</h1>

      <div>
        <input type="text" name="cor" placeholder={"Cor do carro"} onChange={(e) => { setCor(e.target.value) }} /><br />
        <input type="text" name="portas" placeholder={"4 ou 2 portas"} onChange={(e) => { setPortas(e.target.value) }} /><br />
        <input type="text" name="potencia" placeholder={"Potência desejada"} onChange={(e) => { setPotencia(e.target.value) }} /><br />
        <input type="text" name="tipoTeto" placeholder={"Modelo de teto"} onChange={(e) => { setTipoTeto(e.target.value) }} /><br />
        <input type="text" name="tecidoBanco" placeholder={"Tecido dos banco"} onChange={(e) => { setTecidoBanco(e.target.value) }} /><br />
        <button onClick={submitReview}>Enviar</button>
      </div>
    </div>
  );
}

export default App;
