const d = document

// ===== Hamburger Menu Toggle =====
const nav = d.getElementById('c-nav-mobile');
const btnHamburgerDesktop = d.getElementById('c-menu-hamburger');
const btnHamburgerMobile = d.getElementById('c-menu-hamburger-mobile');
const btnHamburgerMobileButton = d.getElementById('c-menu-hamburger-mobile__button');

const setNavState = (isOpen) => {
  if (!nav) return;
  nav.style.left = isOpen ? '0px' : '-100%';
  if (btnHamburgerMobileButton) {
    btnHamburgerMobileButton.classList.toggle('is-active', isOpen);
  }
};

const toggleNav = () => {
  if (!nav) return;
  const isOpen = nav.style.left === '0px';
  setNavState(!isOpen);
};

if (btnHamburgerDesktop) {
  btnHamburgerDesktop.addEventListener('click', toggleNav);
}

if (btnHamburgerMobile) {
  btnHamburgerMobile.addEventListener('click', toggleNav);
}

// ===== Mobile Dropdown Toggle =====
const dropdownTrigger = d.getElementById('c-nav__link--services');
const dropdownMenu = d.getElementById('c-dropdown-mobile');
const dropdownParent = d.getElementById('has-dropdown');


if (dropdownTrigger && dropdownMenu) {
  dropdownTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownParent.classList.toggle('is-open');
  });
} else{
  console.error('Dropdown trigger or menu not found');
}