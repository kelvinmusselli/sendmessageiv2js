import React, { useState } from 'react';
import './Auth.css';

function Auth() {
  const [password, setPassword] = useState('');

  function validatePassword(e) {
    e.preventDefault();

    if (password === 'totvs@iv2') {
      localStorage.setItem('password', password);
      return window.location.reload();
    }

    return alert('Senha inválida');
  }

  return (
    <div className="auth-container">
      <form onSubmit={e => validatePassword(e)}>
        <input type="text" name="password" placeholder="Senha" className="password-input" onChange={e => setPassword(e.target.value.toLocaleLowerCase())} required autoFocus={true} />
        <button type="submit" className="password-submit">Entrar</button>
      </form>
    </div>
  );
}

export default Auth;