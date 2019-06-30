import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ContentEditable from 'react-contenteditable'
import qs from 'qs';
import InputMask from 'react-input-mask';
import Axios from 'axios';
import ContactContext from '../../store/ContactContext';
import { API_ROOT } from '../../config/api-config';
import styles from './NewContactForm.module.scss';

function NewContactForm(props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [observation, setObservation] = useState('');
  const [givewayParticipant, setGivewayParticipant] = useState(true);
  const [sending, setSending] = useState(false);
  const { contactsList, setContactsList } = useContext(ContactContext);

  function addContactsToList(addedContact) {
    const contactsArray = contactsList;
    
    contactsArray.unshift(addedContact);
    setContactsList(contactsArray);
  }

  function goToContacts() {
    props.history.push('/contacts');
  }

  async function _handleSubmit(e) {
    const newItem = qs.stringify({ name, phone, company, givewayParticipant, observation });
    let contact = {};
    let message = '';

    e.preventDefault();

    setSending(true);

    contact = await Axios.post(`${API_ROOT}/contact`, newItem)
    
    message = window.encodeURIComponent(
      'Olá ' + contact.data.name + ',\n\n' +
      'Agradecemos a sua visita em nosso Stand, foi um prazer recebê-lo!\n' +
      (givewayParticipant ? 'O seu número para participar do sorteio é: ' + contact.data.giveawayNumber + '. Boa Sorte!\n' : '') + 
      'E conforme conversamos, segue o material sobre os Apps e soluções da iv2.\n' +
      'Easy Quality https://www.youtube.com/watch?v=-xYYd9CbCo4\n' +
      'Easy Flow https://www.youtube.com/watch?v=cPg9qQ6KTGc&list=PL9e5jlUEjJCmuXox8bNEcStXZwbZ2GebF\n' +
      'Make it Easy https://www.youtube.com/watch?v=b3a3gfTEtpo&t\n\n' +
      'Qualquer dúvida , estamos à disposição :)' +
      '\n\nAbraço,\nGrupo iv2'
    );

    addContactsToList(contact.data);
    setName('');
    setPhone('');
    setCompany('');
    setObservation('');
    setGivewayParticipant(true);
    setSending(false);

    window.open(`https://api.whatsapp.com/send?phone=55${phone.replace(/[(,),\-, ]/g, '')}&text=${message}`, '_blank');
    goToContacts();
  }

  return (
    <div className={styles.overlay} onClick={e => e.target.className === styles.overlay && goToContacts()}>
      <div className={styles.modalContainer}>
        <div className={styles.header}>
          <Link className={styles.closeContainer} to="/contacts">
            <svg className={styles.close} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#212121" />
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </Link>
          Novo contato
        </div>

        <form autoComplete="off" onSubmit={_handleSubmit}>
          <div className={styles.formInputs}>
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>Telefone</label>
              <InputMask value={phone} type="tel" mask="(99) 9 9999-9999" id="phone" name="phone" autoFocus={true} className={styles.formInput} onChange={e => setPhone(e.target.value)} required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Nome</label>
              <input value={name} type="text" id="name" name="name" className={styles.formInput} onChange={e => setName(e.target.value)} required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company" className={styles.label}>Empresa</label>
              <input value={company} type="text" id="company" name="company" className={styles.formInput} onChange={e => setCompany(e.target.value)} required />
            </div>

            <div className={styles.formGroup}>
              <ContentEditable html={observation} id="observation" className={styles.formEditableContent} onChange={e => setObservation(e.target.value)} />
            </div>

            {/* <div className={styles.formGroup}>
              <label htmlFor="giveaway" className={styles.checkboxLabel}>
                <input type="checkbox" name="giveway" id="giveaway" defaultChecked="true" className={styles.checkbox} onChange={e => setGivewayParticipant(e.target.checked) } />
                Quer participar do sorteio
              </label>
            </div> */}
          </div>
          
          <div className={styles.buttonContainer}>
            <button type="submit" disabled={sending} className={styles.submitButton}>
              {sending ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewContactForm;