const { Form } = require("react-bootstrap");

/*--------NavBar Menu---------*/
let navigation = document.querySelector(".navigation");
document.querySelector(".toggle").onclick = function () {
  this.classList.toggle("active");
  navigation.classList.toggle("active");
};
/*---------------Reveal Sections--------------*/
window.addEventListener('scroll', reveal);
function reveal (){
    let reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++){
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
function toggle(){
    let popup = document.querySelector(".popup-video")
    popup.classList.toggle("active")
}    

/*-----------------------------Contact-----------------------*/

const btn = document.getElementById('button');

document.getElementById('contact-form')
.addEventListener('submit', function(event) {
event.preventDefault();

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
