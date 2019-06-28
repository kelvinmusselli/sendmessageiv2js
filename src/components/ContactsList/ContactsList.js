import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import NewMessageForm from '../NewMessageForm/NewContactForm';
import { ModalProvider } from '../../store/ModalContext';
import { ContactProvider } from '../../store/ContactContext';
import { API_ROOT } from '../../api-config';
import './ContactsList.css';

function ContactsList() {
  const [contactsList, setContactsList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const componentDidMount = async () => {
      const contacts = await Axios.get(`${API_ROOT}/contact`);
      
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
      'PARABÉNS\n\n' +
      'Durante o Universo TOTVS, o Grupo iv2 estava sorteando 30 vagas para um workshop de React com o Fluig com os nossos especialistas e você foi um dos ganhadores!' +
      'Segue informações:\n\n' +
      'Data: 12/07/2019\n' +
      'Horário: 09h00 \n' +
      'Endereço: Rua Paulino Corado, 20 - Sala 110 - Jardim Santa Teresa, Jundiaí - SP\n\n' +
      'O vídeo do sorteio está em nossa página do Linkedin: https://www.linkedin.com/company/iv2-tecnologia-e-sistemas/?viewAsMember=true\n\n' +
      'Venha aprender como conseguimos turbinar novas aplicações do fluig com esta tecnologia!\n\n' +
      'Por gentileza, confirmar presença até o dia 05/07.\n\n' +
      'Abraços.'
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