//formularios

const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();

btn.value = 'Enviando....';

const serviceID = 'default_service';
const templateID = 'template_xqe9fno';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    btn.value = 'Enviar Email';
    alert('Mensaje Enviado, pronto te contestaremos al Email');
    }, (err) => {
    btn.value = 'Enviar Email';
    alert(JSON.stringify(err));
    });
});