import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1000,
  delay: 200,
  reset: false,
  mobile: true,
  easing: "ease-in-out"
})

// ========= HERO SECTION ========
sr.reveal('.b-hero-about__content', {
  origin: 'left',
  distance: '80px',
  delay: 200
})
sr.reveal('.b-hero-about__image', {
  origin: 'bottom',
  delay: 300
})

// ========= GRID INFO SECTION ========
sr.reveal('.s-about-grid-info__description', {
  origin: 'left',
  distance: '100px',
  delay: 200
})

sr.reveal('.s-about-grid-info__quote', {
  origin: 'right',
  distance: '100px',
  delay: 200
})

// ========= OUR PURPOSE SECTION ========
sr.reveal('.s-about-purpose__image-container', {
  origin: 'top',
  distance: '100px',
  delay: 200
})

sr.reveal('.s-about-purpose__content', {
  origin: 'bottom',
  distance: '100px',
  delay: 200
})

// ========= OUR APPROACH SECTION ========
sr.reveal('.s-approach__description', {
  // fade
  origin: 'none',
  distance: '0px',
  delay: 200 
})
sr.reveal('.s-approach__list', {
  // fade
  origin: 'none',
  distance: '0px',
  delay: 250 
})

sr.reveal('.s-approach__list-item', {
  origin: 'none',
  distance: '0px',
  opacity: 0,
  scale: 0.9,
  duration: 800,
  interval: 150,
  delay: 300
})

// ========= HOW OUR WORK IS ORGANIZED SECTION ========
sr.reveal('.s-organized__title', {
  // fade
  origin: 'none',
  distance: '0px',
  delay: 200
})

sr.reveal('.s-organized__card', {
  origin: 'left',
  distance: '60px',
  delay: 250,
  interval: 250
})

// ========= FOUNDER PERSPECTIVE SECTION ========
sr.reveal('.s-founder__image', {
  origin: 'top',
  distance: '100px',
  delay: 250
})
sr.reveal('.s-founder__title', {
  origin: 'bottom',
  distance: '100px',
  delay: 200
})
sr.reveal('.s-founder__description', {
  origin: 'right',
  distance: '100px',
  delay: 200
})
sr.reveal('.s-founder__cta', {
  origin: 'none',
  delay: 200,
  distance: '0px'
})

// ========= WHY RIVERBANK SECTION ========
sr.reveal('.s-why-river__sec1', {
  origin: 'left',
  distance: '100px',
  delay: 200
})

sr.reveal('.s-why-river__sec2', {
  origin: 'right',
  distance: '100px',
  delay: 200
})

sr.reveal('.s-why-river__image-container', {
  origin: 'none',
  distance: '0px',
  delay: 200
})
