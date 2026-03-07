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

// ========= CONTACT HERO ========
sr.reveal(".b-contact__content", {
	origin: "left",
	distance: "80px",
	delay: 200
});

sr.reveal(".b-contact__visual", {
	origin: "right",
	distance: "80px",
	delay: 250
});

// ========= CONTACT FORM FIELDS (stagger) ========
sr.reveal(".c-contact-form__field", {
	origin: "none",
	distance: "0px",
	opacity: 0,
	scale: 0.96,
	duration: 700,
	interval: 120,
	delay: 200
});

sr.reveal(".c-contact-form__button", {
	origin: "none",
	distance: "0px",
	opacity: 0,
	delay: 200
});

// ========= FAQ SECTION ========
sr.reveal(".b-faq__title", {
	origin: "left",
	distance: "60px",
	delay: 200
});

sr.reveal(".c-accordion", {
	origin: "none",
	distance: "0px",
	opacity: 0,
	duration: 700,
	interval: 120,
	delay: 150
});