import React from "react";

const ContactContext = React.createContext();

export const ContactProvider = ContactContext.Provider;
export const ContactConsumer = ContactContext.Consumer;
export default ContactContext;
