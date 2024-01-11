/*--------NavBar Menu---------*/
let navigation = document.querySelector(".navigation");
document.querySelector(".toggle").onclick = function () {
  this.classList.toggle("active");
  navigation.classList.toggle("active");
};
/*---------------Reveal Sections--------------*/

/*-----------------------------Contact-----------------------*/

const btn = document.getElementById('button');
const formToReset = document.getElementById('contact-form');

document.getElementById('contact-form')
.addEventListener('submit', function(event) {
event.preventDefault();
formToReset.reset();

btn.value = 'Sending...';

const serviceID = 'default_service';
const templateID = 'template_2dvt0rl';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    btn.value = 'Send Email';
    alert('Sent!');
    }, (err) => {
    btn.value = 'Send Email';
    alert(JSON.stringify(err));
    });
});
