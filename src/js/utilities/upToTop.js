const d = document;
const btnUpToTop = d.getElementById('c-button-up-to-top');

if (btnUpToTop) {
	const toggleButtonVisibility = () => {
		const shouldShow = window.scrollY > 200;
		btnUpToTop.classList.toggle('active', shouldShow);
	};

	const updateProgress = () => {
		const doc = d.documentElement;
		const maxScroll = doc.scrollHeight - window.innerHeight;
		const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
		btnUpToTop.style.setProperty('--scroll-progress', `${progress}%`);
	};

	const handleScroll = () => {
		toggleButtonVisibility();
		updateProgress();
	};

	window.addEventListener('scroll', handleScroll, { passive: true });
	btnUpToTop.addEventListener('click', () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	handleScroll();
}
