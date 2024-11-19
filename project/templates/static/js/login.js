console.log('Arquivo login.js carregado com sucesso.');

document.addEventListener('DOMContentLoaded', function () {
  const passwordField = document.getElementById('id_senha');
  const eyeIcon = document.getElementById('eye-icon');       

  if (passwordField && eyeIcon) {
    eyeIcon.addEventListener('click', function () {
      if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.classList.add('show'); 
        console.log('Senha está visível.');
      } else {
        passwordField.type = 'password'; 
        eyeIcon.classList.remove('show'); 
        console.log('Senha está oculta.');
      }
    });
  } else {
    console.error('Campo de senha ou ícone do olho não encontrado.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const cpfField = document.getElementById('id_cpf');
  const rememberCheckbox = document.getElementById('id_remember_me');

  const cookies = document.cookie.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.split('=').map(c => c.trim());
    acc[key] = decodeURIComponent(value || '');
    return acc;
  }, {});

  if (cookies.remember_token) {
    fetch('/api/decode-token/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: cookies.remember_token })
    })
    .then(response => response.json())
    .then(data => {
      if (data.cpf && cpfField) {
        cpfField.value = data.cpf;
        rememberCheckbox.checked = true;
        console.log('Campo CPF preenchido automaticamente:', data.cpf);
      }
    })
    .catch(error => console.error('Erro ao decodificar o token:', error));
  }
});
