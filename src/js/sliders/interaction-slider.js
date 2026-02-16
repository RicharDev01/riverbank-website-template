import Swiper from 'swiper';
import 'swiper/css';

const d = document;

// Inicializar Swiper
const interactionSwiper = new Swiper('.c-interaction-slides', {
  slidesPerView: 1,
  speed: 600,
  allowTouchMove: true,
  
  // Efecto opcional (puedes cambiarlo después)
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  // No mostrar controles nativos de Swiper ya que usamos custom controls
  navigation: false,
  pagination: false,
});

// Control personalizado: links de navegación
const controlLinks = d.querySelectorAll('.c-controls__link');


controlLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Obtener índice del slide
    const slideIndex = parseInt(link.getAttribute('data-slide'));
    
    // Ir al slide
    interactionSwiper.slideTo(slideIndex);
    
    // Actualizar estado activo
    controlLinks.forEach(l => l.classList.remove('is-active'));
    link.classList.add('is-active');
  });
});

// Sincronizar controles cuando se cambia de slide (por swipe)
interactionSwiper.on('slideChange', () => {
  const activeIndex = interactionSwiper.activeIndex;
  
  // Actualizar estado con toggle
  controlLinks.forEach((link, index) => {
    link.classList.toggle('is-active', index === activeIndex);
  });
});
