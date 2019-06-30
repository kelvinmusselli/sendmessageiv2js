import React, { useState } from 'react';
import { validateLogin } from '../../helpers/auth';
import styles from './AuthForm.module.scss';

function Auth(props) {
  const [password, setPassword] = useState('');

  function validatePassword(e) {
    e.preventDefault();

    if (validateLogin(password)) {
      localStorage.setItem('password', password);
      return window.location.reload();
    }

    return alert('Senha inválida');
  }

  return (
    <div className={styles.authContainer}>
      <form onSubmit={e => validatePassword(e)}>
        <input type="text" name="password" placeholder="Senha" className={styles.passwordInput} onChange={e => setPassword(e.target.value.toLocaleLowerCase())} required autoFocus={true} />
        <button type="submit" className={styles.passwordSubmitButton}>Entrar</button>
      </form>
    </div>
  );
}

export default Auth;