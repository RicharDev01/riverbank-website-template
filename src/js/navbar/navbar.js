const d = document

// ===== Hamburger Menu Toggle =====
const btnHamburger = d.getElementById('c-menu-hamburger'); // contenedor del btn hamburguesa

btnHamburger.addEventListener('click', function() {
  const nav = d.getElementById('c-nav-mobile');
  const animationsHamburger = d.getElementById('c-menu-hamburger__button') // botton del btn hamburguesa
  animationsHamburger.classList.toggle('is-active');
  nav.style.left = nav.style.left === '0px' ? '-100%' : '0px';
});

// ===== Mobile Dropdown Toggle =====
const dropdownTrigger = d.getElementById('c-nav__link--services');
const dropdownMenu = d.getElementById('c-dropdown-mobile');
const dropdownParent = d.getElementById('has-dropdown');

console.table({ dropdownTrigger, dropdownMenu, dropdownParent });

if (dropdownTrigger && dropdownMenu) {
  dropdownTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownParent.classList.toggle('is-open');
  });
} else{
  console.error('Dropdown trigger or menu not found');
}