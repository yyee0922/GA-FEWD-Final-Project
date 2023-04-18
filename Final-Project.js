
// Burger Menu //

const burgerMenu = document.querySelector('#burger-menu')
const menuOpen = document.querySelector('#burger-menu-trigger');
const menuClose = document.querySelector('#menu-close');

function showBurgerMenu() {
    burgerMenu.classList.add('show-menu');
}

function hideBurgerMenu() {
    burgerMenu.classList.remove('show-menu');
}

menuOpen.addEventListener('click', showBurgerMenu);
menuClose.addEventListener('click', hideBurgerMenu);



// Dropdown Menu //

const dropdownMenu = document.querySelector('#our-services-menu');
const ourServicesNav = document.querySelector('#navbar-our-services');

function toggleDropdownMenu() {
    // to obtain the left coordinate value of "Our Services" in nav bar 
    let parentMenu = ourServicesNav.getBoundingClientRect();
    // with the value obtain above, position dropdown menu under the parent "Our Services"
    dropdownMenu.style.left = (parentMenu.left - 32) + 'px';

    // toggle dropdown menu based on whether it's currently shown
    if (dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
    } 
    else {
        dropdownMenu.classList.add('show');
    }
}

ourServicesNav.addEventListener('click', toggleDropdownMenu);
