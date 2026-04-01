const modal = document.querySelector('.search-modal');
const openButtons = document.querySelectorAll('[data-open-search-modal]');
const closeButton = document.querySelector('#close-search-modal');

if (modal) {
	const modalInput = modal.querySelector('#search-modal');

	const openModal = () => {
		modal.classList.add('is-open');
		modal.setAttribute('aria-hidden', 'false');
		document.body.classList.add('is-modal-open');
		if (modalInput) {
			modalInput.focus();
		}
	};

	const closeModal = () => {
		modal.classList.remove('is-open');
		modal.setAttribute('aria-hidden', 'true');
		document.body.classList.remove('is-modal-open');
	};

	openButtons.forEach((button) => {
		button.addEventListener('click', (event) => {
			event.preventDefault();
			openModal();
		});
	});

	if (closeButton) {
		closeButton.addEventListener('click', (event) => {
			event.preventDefault();
			closeModal();
		});
	}

	modal.addEventListener('click', (event) => {
		if (event.target === modal) {
			closeModal();
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && modal.classList.contains('is-open')) {
			closeModal();
		}
	});
}
