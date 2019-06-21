import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import Axios from 'axios';
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setComapny] = useState("");
  const [giveway, setGiveway] = useState(1);

  const [listItens, setListItens] = useState([
    {name: "Jessiley 1", phone: "(11) 9 4767:3811 ", company: "TOTVS", giveway: 0}, 
    {name: "Jessiley 2", phone: "(11) 9 4767:3822 ", company: "Vipal", giveway: 1}, 
    {name: "Jessiley 3", phone: "(11) 9 4767:3833 ", company: "Grupo IV2", giveway: 1}, 
    {name: "Jessiley 4", phone: "(11) 9 4767:3844 ", company: "Outro", giveway: 1}]);
  useEffect(() => {
    const componentDidMount = async () => {
      setTimeout(() => {
        setListItens([
          {name: "Jessiley 1", phone: "(11) 9 4767:3811 ", company: "TOTVS", giveway: 1}, 
          {name: "Jessiley 2", phone: "(11) 9 4767:3822 ", company: "Vipal", giveway: 0}, 
          {name: "Jessiley 3", phone: "(11) 9 4767:3833 ", company: "Grupo IV2", giveway: 1}, 
          {name: "Jessiley 5", phone: "(11) 9 4767:3844 ", company: "Outro", giveway: 1}]);
      }, 2000);
    }
    
    componentDidMount();
  }, []);

  const _handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {name: name, phone: phone, comapny: company, giveway: giveway};

    let number = await Axios.post('', newItem);

    let texto = "";
    if(giveway === 1){
      texto = `Olá, agradecemos a sua visita em nosso Stand, foi um prazer recebê-lo! \n O seu número para participar do sorteio é: ${number}. Boa Sorte! \n E conforme conversamos, segue o material sobre os Apps e soluções da iv2 .Qualquer dúvida , estamos á disposição :) \n Abraço! \n Grupo iv2`;
    }else{
      texto = "Olá, agradecemos a sua visita em nosso Stand, foi um prazer recebê-lo! \n E conforme conversamos, segue o material sobre os Apps e soluções da iv2 .Qualquer dúvida , estamos á disposição :) \n  Abraço! \n Grupo iv2";
    }

    texto = window.encodeURIComponent(texto);

    window.open(`https://api.whatsapp.com/send?phone=55${phone.replace(/[(,),\-, ]/g, '')}&text=${texto}`, '_blank');

  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={_handleSubmit}>
          <div><label>Nome: </label><input value={name} type="text" id="name" name="name" onChange={e => setName(e.target.value)}/></div>
          <div><label>Telefone: </label><InputMask mask="(99) 9 9999-9999"  id="phone" name="phone" onChange={e => setPhone(e.target.value)} /></div>
          <div><label>Empresa: </label><input value={company} type="text" id="company" name="company" onChange={e => setComapny(e.target.value)}/></div>
          <div>
            <label><input value="1" type="radio" name="giveway" defaultChecked="true" onClick={e => setGiveway(1)} />Sim</label>
            <label><input value="0" type="radio" name="giveway" onClick={e => setGiveway(0)}  />Não</label>
          </div>
          <div><input type="submit" value="Salvar"/></div>
        </form>
        <div className="list">
          <div>
            <div style={{width: "30%"}}>Nome</div>
            <div style={{width: "30%"}}>Telefone</div>
            <div style={{width: "30%"}}>Empresa</div>
            <div style={{width: "10%"}}>Sorteio</div>
          </div>
          {listItens.length > 0 && listItens.map((item, key) => {
            return(
            <div key={key}>
              <div style={{width: "30%"}}>{item.name}</div>
              <div style={{width: "30%"}}>{item.phone}</div>
              <div style={{width: "30%"}}>{item.company}</div>
              <div style={{width: "10%"}}>{item.giveway === 1 ? "Sim" : item.giveway === 0 ? "Não" : "erro"}</div>
            </div>
            )
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
