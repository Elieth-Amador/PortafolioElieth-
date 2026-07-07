import './styles.less';

const form = document.querySelector('#contactForm');
const message = document.querySelector('#formMessage');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nombre = document.querySelector('#nombre').value.trim();
  const correo = document.querySelector('#correo').value.trim();
  const mensaje = document.querySelector('#mensaje').value.trim();

  if (nombre.length < 3) {
    message.textContent = 'Por favor escribe tu nombre completo.';
    message.className = 'form-message error';
    return;
  }

  if (!correo.includes('@') || !correo.includes('.')) {
    message.textContent = 'Por favor escribe un correo válido.';
    message.className = 'form-message error';
    return;
  }

  if (mensaje.length < 5) {
    message.textContent = 'Por favor escribe un mensaje más completo.';
    message.className = 'form-message error';
    return;
  }

  message.textContent = 'Mensaje enviado correctamente. ¡Gracias por contactarme!';
  message.className = 'form-message success';
  form.reset();
});
