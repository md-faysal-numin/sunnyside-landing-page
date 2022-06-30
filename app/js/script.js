//hamburger
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.nav__items');


function showMobileMenu()
{
    console.log("object")
    mobileMenu.classList.toggle('nav__toggle');
    
}
hamburger.addEventListener('click',showMobileMenu );