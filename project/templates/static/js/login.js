function openEye() {
  const password = document.getElementById('input-password')

  password.type = password.type == 'text' ? 'password' : 'text'
}

function showButton() {
  const button = document.getElementById('checkbox')
  const check = document.getElementById('check-icon')

  check.classList.toggle('show')
  button.classList.toggle('show')
}


