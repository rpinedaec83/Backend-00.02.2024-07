let email = document.getElementById('email');
let password = document.getElementById('password');
let remember = document.getElementById('remember');

const onLogin = () => {
  if (email.value == 'ccarlos@email.com' && password.value == '123456') {
    sessionStorage.setItem('login', JSON.stringify({login: remember.checked}));

    window.location.href = '/Hackaton06/SV45593820/index.html';
    return false;
  }
}