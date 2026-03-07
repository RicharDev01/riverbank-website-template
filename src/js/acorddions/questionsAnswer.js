const accordionItems = document.querySelectorAll("[data-accordion]");

const openPanel = (panel) => {
	panel.hidden = false;
	panel.classList.add("is-open");
	panel.style.maxHeight = `${panel.scrollHeight}px`;
};

const closePanel = (panel) => {
	if (panel.hidden) {
		return;
	}

	panel.classList.remove("is-open");
	panel.style.maxHeight = `${panel.scrollHeight}px`;

	requestAnimationFrame(() => {
		panel.style.maxHeight = "0px";
	});

	const onTransitionEnd = (event) => {
		if (event.propertyName === "max-height") {
			panel.hidden = true;
			panel.removeEventListener("transitionend", onTransitionEnd);
		}
	};

	panel.addEventListener("transitionend", onTransitionEnd);
};

accordionItems.forEach((item) => {
	const button = item.querySelector(".c-accordion__header");
	const panel = item.querySelector(".c-accordion__panel");

	if (!button || !panel) {
		return;
	}

	const isExpanded = button.getAttribute("aria-expanded") === "true";
	if (isExpanded) {
		openPanel(panel);
	} else {
		panel.hidden = true;
		panel.classList.remove("is-open");
		panel.style.maxHeight = "0px";
	}

	button.addEventListener("click", () => {
		const currentlyExpanded = button.getAttribute("aria-expanded") === "true";
		const nextExpanded = !currentlyExpanded;

		accordionItems.forEach((otherItem) => {
			const otherButton = otherItem.querySelector(".c-accordion__header");
			const otherPanel = otherItem.querySelector(".c-accordion__panel");

			if (!otherButton || !otherPanel) {
				return;
			}

			if (otherItem !== item && otherButton.getAttribute("aria-expanded") === "true") {
				otherButton.setAttribute("aria-expanded", "false");
				closePanel(otherPanel);
			}
		});

		button.setAttribute("aria-expanded", String(nextExpanded));
		if (nextExpanded) {
			openPanel(panel);
		} else {
			closePanel(panel);
		}
	});
});