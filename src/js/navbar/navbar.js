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

// ===== Header Theme Detection =====
const header = d.querySelector('.l-header');
const logoImages = d.querySelectorAll('.c-logo__img');

const getThemeOverride = () => {
  const overrideEl = d.querySelector('[data-header-theme]');
  if (!overrideEl) return null;
  const value = overrideEl.getAttribute('data-header-theme');
  return value ? value.toLowerCase() : null;
};

const parseRgb = (color) => {
  if (!color || color === 'transparent') return null;
  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (!match) return null;
  return {
    r: Number(match[1]),
    g: Number(match[2]),
    b: Number(match[3])
  };
};

const getBackgroundSample = (el) => {
  if (!el) return null;
  const styles = window.getComputedStyle(el);
  if (styles.backgroundImage && styles.backgroundImage !== 'none') {
    return null;
  }
  return parseRgb(styles.backgroundColor);
};

const isLightColor = (rgb) => {
  if (!rgb) return false;
  const luminance = (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;
  return luminance > 0.6;
};

const setHeaderTheme = (isOnLight) => {
  if (!header) return;
  header.classList.toggle('is-on-light', isOnLight);

  logoImages.forEach((img) => {
    const currentSrc = img.getAttribute('src') || '';
    if (!img.dataset.logoDark) {
      img.dataset.logoDark = currentSrc;
      img.dataset.logoLight = currentSrc.replace('icon-logo-white.svg', 'icon-logo-colors.svg');
    }

    if (isOnLight && img.dataset.logoLight !== img.dataset.logoDark) {
      img.setAttribute('src', img.dataset.logoLight);
    } else {
      img.setAttribute('src', img.dataset.logoDark);
    }
  });
};

const resolveHeaderTheme = () => {
  if (!header) return;

  const override = getThemeOverride();
  if (override === 'light') {
    setHeaderTheme(true);
    return;
  }
  if (override === 'dark') {
    setHeaderTheme(false);
    return;
  }

  const hero = d.querySelector('[data-hero], .b-hero-container, main > section');
  const heroSample = getBackgroundSample(hero);

  if (heroSample) {
    setHeaderTheme(isLightColor(heroSample));
    return;
  }

  const bodySample = getBackgroundSample(d.body) || getBackgroundSample(d.documentElement);
  setHeaderTheme(isLightColor(bodySample));
};

if (header) {
  if (d.readyState === 'loading') {
    d.addEventListener('DOMContentLoaded', resolveHeaderTheme);
  } else {
    resolveHeaderTheme();
  }
}