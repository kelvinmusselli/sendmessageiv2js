function validateLogin(password) {
  const correctPassword = 'totvs@iv2';
  return password && password === correctPassword;
}

export {
  validateLogin
};