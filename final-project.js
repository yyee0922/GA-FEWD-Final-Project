
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

function positionDropdownMenu() {
    // to obtain the left coordinate value of "Our Services" in nav bar 
    let parentMenu = ourServicesNav.getBoundingClientRect();
    // with the value obtain above, position dropdown menu under the parent "Our Services"
    dropdownMenu.style.left = (parentMenu.left - 32) + 'px';    
    // add window.scrollY to account for scrolling, as Navigation bar is fixed position 
    dropdownMenu.style.top = (parentMenu.bottom + window.scrollY) + 'px';
}

function showDropdownMenu() {
    dropdownMenu.classList.add('show');
    positionDropdownMenu();
}

function hideDropdownMenu() {
    dropdownMenu.classList.remove('show');
}

ourServicesNav.addEventListener('mouseover', showDropdownMenu);
dropdownMenu.addEventListener('mouseleave', hideDropdownMenu);