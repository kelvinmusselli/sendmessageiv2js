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

  function sendMessage({ phone, name, giveawayNumber, givewayParticipant }) {
    // console.log(phone);
    // console.log(name);
    // console.log(giveawayNumber);
    // console.log(givewayParticipant);

    const message = window.encodeURIComponent(
      "Olá " +
        name +
        ",\n\n" +
        "Agradecemos a sua visita em nosso Stand, foi um prazer recebê-lo!\n\n" +
        (givewayParticipant
          ? "Você está participando do sorteio de um Brinde!!! \n\nSeu código é: " +
            giveawayNumber +
            ". Boa Sorte!\n\n"
          : "") +
        "E conforme conversamos, segue o material sobre os Apps e soluções da iv2.\n\n" +
        "CLIQUE E CONHEÇA O GRUPO IV2: https://youtu.be/oMJmbSuJ7vc\n\n" +
        "Conheça o Grupo iv2: https://drive.google.com/file/d/1X69rRSPQiiK3NJIYRGeuQtGcmXJYjooN/view?usp=sharing\n\n" +
        "Easy Quality https://www.youtube.com/watch?v=-xYYd9CbCo4\n\n" +
        // "Easy Flow https://www.youtube.com/watch?v=cPg9qQ6KTGc&list=PL9e5jlUEjJCmuXox8bNEcStXZwbZ2GebF\n" +
        "Make it Easy https://www.youtube.com/watch?v=9A9AlwLFLO0\n\n" +
        "Employee Journey  https://www.youtube.com/watch?v=J9_fWGw9gJc&t\n\n" +
        "GOF - Gestão de Objeto Fluig  https://www.youtube.com/watch?v=_VpESoY_o3Q\n\n" +
        "Qualquer dúvida , estamos à disposição :)" +
        "\n\nAbraço,\nGrupo iv2"
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
