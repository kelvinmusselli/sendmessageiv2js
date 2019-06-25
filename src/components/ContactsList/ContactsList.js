import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import NewMessageForm from '../NewMessageForm/NewContactForm';
import { ModalProvider } from '../../store/ModalContext';
import { ContactProvider } from '../../store/ContactContext';
import './ContactsList.css';

function ContactsList() {
  const [contactsList, setContactsList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const componentDidMount = async () => {
      const contacts = await Axios.get('https://send-message-iv2.herokuapp.com/api/v1/contact');
      
      setLoading(false);
      setContactsList(contacts.data);
    }
    
    componentDidMount();
  }, []);

  useEffect(() => {
    document.querySelector('body').style.overflowY = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  function sendMessage({ name, phone, giveawayNumber, givewayParticipant }) {
    let message = '';

    message = window.encodeURIComponent(
      'Olá ' + name + ',\n\n' +
      'Agradecemos a sua visita em nosso Stand, foi um prazer recebê-lo!\n' +
      (givewayParticipant ? 'O seu número para participar do sorteio é: ' + giveawayNumber + '. Boa Sorte!\n' : '') + 
      'E conforme conversamos, segue o material sobre os Apps e soluções da iv2.\n' +
      'Easy Quality https://www.youtube.com/watch?v=-xYYd9CbCo4\n' +
      'Easy Flows https://www.youtube.com/watch?v=cPg9qQ6KTGc&list=PL9e5jlUEjJCmuXox8bNEcStXZwbZ2GebF\n' +
      'Make it Easy https://www.youtube.com/watch?v=b3a3gfTEtpo&t\n\n' +
      'Qualquer dúvida , estamos á disposição :)' +
      '\n\nAbraço,\nGrupo iv2'
    );

    window.open(`https://api.whatsapp.com/send?phone=55${phone.replace(/[(,),\-, ]/g, '')}&text=${message}`, '_blank');
  }

  return (
    <>
      <div className="header-list">
        {loading ? 'Carregando contatos...' : `Contatos (${contactsList.length})`}
      </div>

      <div className="contact-list">
        {
          contactsList.map(contact => {
            return (
              <div className="contact-list-item" key={contact._id} onClick={() => sendMessage(contact)}>
                <div>
                  <div className="contact-inital">
                    {
                      contact.name.substr(0, 1)
                    }
                  </div>
                </div>

                <div className="contact-info-container">
                  {contact.name}
                  <div className="info">{contact.company}</div>
                  <div className="info phone">{contact.phone}</div>
                </div>
                
                {
                  contact.givewayParticipant &&
                  <div className="giveaway-number-container">
                    n° {contact.giveawayNumber}
                  </div>
                }
              </div>
            )
          })
        }
      </div>

      <button type="button" className="fab" onClick={() => setShowModal(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#fff"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </button>

      <ModalProvider value={{ setShowModal }}>
        <div id="modalContainer" onClick={e => e.target.id === 'modalContainer' && setShowModal(false)} className={'modal-container' + (showModal ? ' visible' : '')}>
          <div className={'form-modal' + (showModal ? ' visible' : '')}>
            <ContactProvider value={{ contactsList, setContactsList }}>
              <NewMessageForm />
            </ContactProvider>
          </div>
        </div>
      </ModalProvider>
    </>
  );
}

export default ContactsList;