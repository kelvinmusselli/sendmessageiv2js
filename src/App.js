import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import Axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setComapny] = useState("");
  const [giveway, setGiveway] = useState(1);

  const [listItens, setListItens] = useState([{name: "Jessiley 1", phone: "(11) 9 4767:3811 ", company: "TOTVS", givewayParticipant: 0}]);

  useEffect(() => {
    const componentDidMount = async () => {
      setListItens(await Axios.get('http://localhost:3333/api/v1/contact'));
    }
    
    componentDidMount();
  }, []);

  const _handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {name: name, phone: phone, comapny: company, givewayParticipant: giveway};

    let number = await Axios.post('http://localhost:3333/api/v1/contact', newItem);

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
          <div className="form-group"><label for="name">Nome: </label><input value={name} type="text" id="name" name="name" onChange={e => setName(e.target.value)} class="form-control" /></div>
          <div className="form-group"><label for="phone">Telefone: </label><InputMask mask="(99) 9 9999-9999"  id="phone" name="phone" onChange={e => setPhone(e.target.value)} class="form-control" /></div>
          <div className="form-group"><label for="company">Empresa: </label><input value={company} type="text" id="company" name="company" onChange={e => setComapny(e.target.value)} class="form-control" /></div>
          <div className="form-group form-check">
            <label>Quer participar do Sorteio?</label><br />
            <label for="givewaySim"><input value="1" type="radio" name="giveway" id="givewaySim" defaultChecked="true" onClick={e => setGiveway(1)} />Sim</label>
            <label for="givewayNao"><input value="0" type="radio" name="giveway" id="givewayNao"  onClick={e => setGiveway(0)}  />Não</label>
          </div>
          <div><input type="submit" value="Salvar" className="btn btn-primary" /></div>
        </form>
        <table class="table">

          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Telefone</th>
              <th scope="col">Empresa</th>
              <th scope="col">Sorteio</th>
            </tr>
          </thead>
          < tbody>
          {listItens.length > 0 && listItens.map((item, key) => {
            return(
             
              <tr key={key}>
                <th scope="row">{item._id}</th>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.company}</td>
                <td>{item.givewayParticipant === 1 ? "Sim" : item.givewayParticipant === 0 ? "Não" : "erro"}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
