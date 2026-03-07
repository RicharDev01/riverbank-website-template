import ScrollReveal from 'scrollreveal'

// ================== SCROLL REVEAL CONFIG ==================
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 200,
  reset: false,
  mobile: true,
  easing: 'ease-in-out'
})

// Hero Section
sr.reveal('.b-hero__content--box', {
  origin: 'left',
  distance: '80px',
  delay: 300
})

sr.reveal('.b-hero__ctas', {
  origin: 'bottom',
  delay: 500
})

// Grid Info Section
sr.reveal('.s-grid-info-1', {
  origin: 'left',
  distance: '100px',
  delay: 200
})

sr.reveal('.s-grid-info-image', {
  origin: 'bottom',
  scale: 0.85,
  delay: 400
})

sr.reveal('.s-grid-info-2', {
  origin: 'right',
  distance: '100px',
  delay: 300
})

// Cards Section
sr.reveal('.s-cards-container .title-1', {
  origin: 'top',
  distance: '50px',
  delay: 200
})

sr.reveal('.c-card', {
  origin: 'bottom',
  distance: '80px',
  interval: 200,
  delay: 300
})

// Interaction Section
sr.reveal('.c-interaction-content', {
  origin: 'left',
  distance: '80px',
  delay: 200
})

sr.reveal('.c-interaction-slides', {
  origin: 'right',
  distance: '80px',
  delay: 400
})

// How We Work Section
sr.reveal('.s-work__title', {
  origin: 'top',
  delay: 200
})

sr.reveal('.s-work__paragraph', {
  origin: 'bottom',
  interval: 150,
  delay: 300
})

sr.reveal('.s-work__subtitle', {
  origin: 'left',
  delay: 400
})

sr.reveal('.s-work__engagements-item', {
  origin: 'bottom',
  interval: 200,
  delay: 500,
  distance: '40px'
})

// System Section
sr.reveal('.s-system__image-container', {
  origin: 'left',
  distance: '100px',
  delay: 200
})

sr.reveal('.s-system__card', {
  origin: 'right',
  distance: '80px',
  delay: 400
})

// Intention Section
sr.reveal('.s-intention__title', {
  origin: 'top',
  distance: '60px',
  delay: 200
})

sr.reveal('.s-intention__paragrapha', {
  origin: 'bottom',
  delay: 300
})

sr.reveal('.s-intention__buttons', {
  origin: 'bottom',
  delay: 500
})

sr.reveal('.s-intention-image-container', {
  origin: 'right',
  scale: 0.9,
  delay: 600
})

// Newsletter Section
sr.reveal('.b-newsletter__title', {
  origin: 'top',
  distance: '50px',
  delay: 200
})

sr.reveal('.b-newsletter-content', {
  origin: 'bottom',
  distance: '40px',
  delay: 400
})

