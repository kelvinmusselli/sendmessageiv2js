import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { validateLogin } from './helpers/auth';
import ContactsList from './components/ContactsList/ContactsList';
import AuthForm from './components/AuthForm/AuthForm';

function routes() {
  const isLogged = validateLogin(localStorage.password);

  const publicRoutes = <Switch>
    <Route path="/login" exact component={AuthForm} />
    <Redirect from="*" to="/login" />
  </Switch>;

  const privateRoutes = <Switch>
    <Route path="/contacts" exact component={ContactsList} />
    <Route path="/contacts/new" exact component={ContactsList} />
    <Redirect from="*" to="/contacts" />
  </Switch>;

  return <BrowserRouter>
    { isLogged ? privateRoutes : publicRoutes }
  </BrowserRouter>
}

export default routes;