import React, { useState, useContext, useEffect } from 'react';
import InputMask from 'react-input-mask';
import Axios from 'axios';
import ModalContext from '../../store/ModalContext';
import ContactContext from '../../store/ContactContext';
import './NewContactForm.css';

function NewContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [givewayParticipant, setGivewayParticipant] = useState(true);
  const { setShowModal } = useContext(ModalContext);
  const { contactsList, setContactsList } = useContext(ContactContext);

  function addContactsToList(addedContact) {
    const contactsArray = contactsList;
    
    contactsArray.push(addedContact);
    
    setContactsList(contactsArray);
  }

  async function _handleSubmit(e) {
    const newItem = { name, phone, company, givewayParticipant };
    let contact = {};
    let message = '';

    e.preventDefault();

    contact = await Axios.post('http://localhost:3100/api/v1/contact', newItem);
    
    message = window.encodeURIComponent(
      'Olá ' + contact.data.name + ',\n\n' +
      'Agradecemos a sua visita em nosso Stand, foi um prazer recebê-lo!\n' +
      (givewayParticipant ? 'O seu número para participar do sorteio é: ' + contact.data.giveawayNumber + '. Boa Sorte!\n' : '') + 
      'E conforme conversamos, segue o material sobre os Apps e soluções da iv2. Qualquer dúvida , estamos á disposição :)' +
      '\n\nAbraço,\nGrupo iv2'
    );

    window.open(`https://api.whatsapp.com/send?phone=55${phone.replace(/[(,),\-, ]/g, '')}&text=${message}`, '_blank');

    addContactsToList(contact.data);
    setName('');
    setPhone('');
    setCompany('');
    setGivewayParticipant(true);
    setShowModal(false);
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
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </>
  );
}

export default NewContactForm;
