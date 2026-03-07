
const form = document.querySelector("#contact-form");

if (form) {
	const fields = Array.from(form.querySelectorAll(".c-contact-form__field"));

	const setError = (input, errorEl, message) => {
		input.classList.add("is-error");
		input.setAttribute("aria-invalid", "true");
		if (errorEl) {
			errorEl.textContent = message;
		}
	};

	const clearError = (input, errorEl) => {
		input.classList.remove("is-error");
		input.removeAttribute("aria-invalid");
		if (errorEl) {
			errorEl.textContent = "";
		}
	};

	const validateField = (input, errorEl) => {
		const value = input.value.trim();

		if (!value) {
			setError(input, errorEl, "This field is required.");
			return false;
		}

		if (input.type === "email" && !input.validity.valid) {
			setError(input, errorEl, "Please enter a valid email address.");
			return false;
		}

		clearError(input, errorEl);
		return true;
	};

	fields.forEach((field) => {
		const input = field.querySelector("input, textarea");
		const errorEl = field.querySelector(".c-contact-form__error");

		if (!input) {
			return;
		}

		input.addEventListener("input", () => {
			if (input.classList.contains("is-error")) {
				validateField(input, errorEl);
			}
		});
	});

	form.addEventListener("submit", (event) => {
		let isValid = true;

		fields.forEach((field) => {
			const input = field.querySelector("input, textarea");
			const errorEl = field.querySelector(".c-contact-form__error");

			if (!input) {
				return;
			}

			const fieldValid = validateField(input, errorEl);
			if (!fieldValid) {
				isValid = false;
			}
		});

		if (!isValid) {
			event.preventDefault();
			return;
		}

		event.preventDefault();
		form.reset();
	});
}

