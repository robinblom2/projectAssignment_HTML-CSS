let menuOpen = false;
const hamburgerBtn = document.getElementById('hamburger');       /* Hamburger-button*/
const mobileMenu = document.querySelector(".mobile-menu");       /* Mobile-menu */
const links = document.getElementsByClassName('mobile-link');    /* The nav links */

/* Function to toggle the menu on and off */
function menuToggle(){
    if(!menuOpen){
        hamburgerBtn.classList.add("open");
        menuOpen = true;
        mobileMenu.style.bottom = "0%";
    }else{
        hamburgerBtn.classList.remove("open");
        menuOpen = false;
        mobileMenu.style.bottom = "-100%";
    }
}

/* EventListener for the Hamburger-button */
window.addEventListener("load", function(){
    hamburgerBtn.addEventListener("click", menuToggle);

    /* When a navlink is clicked, close the menu */
    for(let i = 0; i < links.length; i++){
        links[i].addEventListener("click", menuToggle)
    }
})