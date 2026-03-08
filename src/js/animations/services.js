import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
	origin: "bottom",
	distance: "60px",
	duration: 900,
	delay: 200,
	reset: false,
	mobile: true,
	easing: "ease-in-out"
});

// ========= HERO ========
sr.reveal(".b-service-hero__card", {
	origin: "left",
	distance: "80px",
	delay: 200
});

// ========= QUOTE ========
sr.reveal(".b-service-quote__text", {
	origin: "bottom",
	distance: "60px",
	delay: 200
});

// ========= WHAT SECTION ========
sr.reveal(".b-service-what__card", {
	origin: "left",
	distance: "60px",
	delay: 200
});

sr.reveal(".b-service-what__list", {
	origin: "right",
	distance: "60px",
	delay: 250
});

// ========= RECEIVE LIST ========
sr.reveal(".b-service-receive__item", {
	origin: "none",
	distance: "0px",
	opacity: 0,
	duration: 700,
	interval: 120,
	delay: 200
});

sr.reveal(".b-service-receive__note", {
	origin: "bottom",
	distance: "40px",
	delay: 200
});

// ========= WHO IT'S FOR ========
sr.reveal(".b-service-for__title", {
	origin: "bottom",
	distance: "40px",
	delay: 200
});

sr.reveal(".b-service-for__card", {
	origin: "none",
	distance: "0px",
	opacity: 0,
	duration: 700,
	interval: 150,
	delay: 200
});

// ========= HOW IT WORKS ========
sr.reveal(".b-service-how__title", {
	origin: "bottom",
	distance: "40px",
	delay: 200
});

sr.reveal(".b-service-how__image", {
	origin: "bottom",
	distance: "60px",
	delay: 200
});


// ========= The Riverbed Alliance ========
sr.reveal('.b-service-alliance', {
	origin: 'top',
	distance: '60px',
	delay: 200
})
