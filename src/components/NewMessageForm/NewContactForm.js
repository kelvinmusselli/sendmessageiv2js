import React, { useState, useContext } from 'react';
import InputMask from 'react-input-mask';
import Axios from 'axios';
import ModalContext from '../../store/ModalContext';
import ContactContext from '../../store/ContactContext';
import './NewContactForm.css';
var qs = require('qs');

function NewContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [givewayParticipant, setGivewayParticipant] = useState(true);
  const [sending, setSending] = useState(false);
  const { setShowModal } = useContext(ModalContext);
  const { contactsList, setContactsList } = useContext(ContactContext);
  const [teste, setTeste] = useState({});
  const [teste2, setTeste2] = useState({});

  function addContactsToList(addedContact) {
    const contactsArray = contactsList;
    
    contactsArray.unshift(addedContact);
    
    setContactsList(contactsArray);
  }

  async function _handleSubmit(e) {
    const newItem = qs.stringify({ name, phone, company, givewayParticipant });
    let contact = {};
    let message = '';

    e.preventDefault();

    setSending(true);

    setTeste2(newItem)

    contact = await Axios.post('https://send-message-iv2.herokuapp.com/api/v1/contact', newItem)
    
    message = window.encodeURIComponent(
      'Olá ' + contact.data.name + ',\n\n' +
      'Agradecemos a sua visita em nosso Stand, foi um prazer recebê-lo!\n' +
      (givewayParticipant ? 'O seu número para participar do sorteio é: ' + contact.data.giveawayNumber + '. Boa Sorte!\n' : '') + 
      'E conforme conversamos, segue o material sobre os Apps e soluções da iv2.\n' +
      'Easy Quality https://www.youtube.com/watch?v=-xYYd9CbCo4\n' +
      'Easy Flow https://www.youtube.com/watch?v=cPg9qQ6KTGc&list=PL9e5jlUEjJCmuXox8bNEcStXZwbZ2GebF\n' +
      'Make it Easy https://www.youtube.com/watch?v=b3a3gfTEtpo&t\n\n' +
      'Qualquer dúvida , estamos á disposição :)' +
      '\n\nAbraço,\nGrupo iv2'
    );

    addContactsToList(contact.data);
    setName('');
    setPhone('');
    setCompany('');
    setGivewayParticipant(true);
    setSending(false);
    setShowModal(false);

    window.open(`https://api.whatsapp.com/send?phone=55${phone.replace(/[(,),\-, ]/g, '')}&text=${message}`, '_blank');
  }

  return (
    <>
      <div className="header">
        <div className="close" onClick={() => setShowModal(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </div>
        Novo contato
      </div>

      <form autoComplete="off" onSubmit={_handleSubmit}>
        <div className="form-inputs">
          <div className="form-group">
            <label htmlFor="phone">Telefone</label>
            <InputMask value={phone} type="tel" mask="(99) 9 9999-9999" id="phone" name="phone" onChange={e => setPhone(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input value={name} type="text" id="name" name="name" onChange={e => setName(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="company">Empresa</label>
            <input value={company} type="text" id="company" name="company" onChange={e => setCompany(e.target.value)} required />
          </div>

          <div className="form-group form-check">
            <label htmlFor="giveaway" className="checkbox">
              <input type="checkbox" name="giveway" id="giveaway" defaultChecked="true" onChange={e => setGivewayParticipant(e.target.checked) } />
              Quer participar do sorteio
            </label>
          </div>
        </div>
        
        <div className="button-container">
          <button type="submit" disabled={sending}>
            {sending ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </form>
    </>
  );
}

export default NewContactForm;
