/*--------NavBar Menu---------*/
let menu = document.querySelector(".menu");
let navMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    menu.classList.remove("active");
    navMenu.classList.remove("active");
}))

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
