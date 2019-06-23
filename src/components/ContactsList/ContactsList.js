import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import NewMessageForm from '../NewMessageForm/NewContactForm';
import { ModalProvider } from '../../store/ModalContext';
import { ContactProvider } from '../../store/ContactContext';
import './ContactsList.css';

function ContactsList() {
  const [contactsList, setContactsList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const componentDidMount = async () => {
      const contacts = await Axios.get('http://localhost:3100/api/v1/contact');
      setContactsList(contacts.data);
    }
    
    componentDidMount();
  }, []);

  return (
    <>
      <div className="header">
        Contatos ({contactsList.length})
      </div>

      <div className="contact-list">
        {
          contactsList.map(contact => {
            return (
              <div className="contact-list-item" key={contact._id}>
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
                    n° {contact.giveawayNumber}2
                  </div>
                }
              </div>
            )
          })
        }
      </div>

      <button type="button" className="fab" onClick={() => setShowModal('show')}>
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