import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Route, Link } from "react-router-dom";
import NewMessageForm from "../NewMessageForm/NewContactForm";
import { ContactProvider } from "../../store/ContactContext";
import { API_ROOT } from "../../config/api-config";
import styles from "./ContactsList.module.scss";

function ContactsList() {
  const [contactsList, setContactsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const componentDidMount = async () => {
      const contacts = await Axios.get(`${API_ROOT}/contact`);

      setLoading(false);
      setContactsList(contacts.data);
    };

    componentDidMount();
  }, []);

  function sendMessage({ phone }) {
    const message = window.encodeURIComponent(
      "PARABÉNS\n\n" +
        "Durante o Evento, o Grupo iv2 estará sorteando um brinde!\n\n" +
        "Segue informações:\n\n" +
        "Data: 16/01/2020\n" +
        "Horário: 15h00\n" +
        "Aproveite e Siga nosso Linkedin: https://www.linkedin.com/company/iv2-tecnologia-e-sistemas/?viewAsMember=true\n\n" +
        "Venha aprender como conseguimos turbinar novas aplicações do fluig com esta tecnologia!\n\n" +
        "Abraços."
    );

    window.open(
      `https://api.whatsapp.com/send?phone=55${phone.replace(
        /[(,),\-, ]/g,
        ""
      )}&text=${message}`,
      "_blank"
    );
  }

  return (
    <>
      <div className={styles.headerList}>
        {loading
          ? "Carregando contatos..."
          : `Contatos (${contactsList.length})`}
      </div>

      <div className={styles.contactList}>
        {contactsList.map(contact => {
          return (
            <div
              className={styles.contactListItem}
              key={contact._id}
              onClick={() => sendMessage(contact)}
            >
              <div>
                <div className={styles.contactInital}>
                  {contact.name.substr(0, 1).toUpperCase()}
                </div>
              </div>

              <div className={styles.contactInfoContainer}>
                {contact.name}
                <div className={styles.info}>{contact.company}</div>
                <div className={styles.phone}>{contact.phone}</div>
              </div>

              {contact.givewayParticipant && (
                <div className={styles.giveawayNumberContainer}>
                  n° {contact.giveawayNumber}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Link to="/contacts/new" className={styles.fab}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#fff" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </Link>

      <ContactProvider value={{ contactsList, setContactsList }}>
        <Route path="/contacts/new" component={NewMessageForm} />
      </ContactProvider>
    </>
  );
}

export default ContactsList;
