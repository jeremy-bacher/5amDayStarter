const createInput = ({ element, label, placeholder, isHidden }) => {
	element.innerHTML = `
        <div class="field">
            <label for="" class="label">${label}</label>
            <div class="control">
                <input class="input" type="text" placeholder="${placeholder}">
                <button class="submit button is-link">Submit</button>
            </div>
        </div>
        <hr>
	`;

	if (isHidden) {
		element.parentElement.parentElement.classList.add('is-hidden');
	}

	const input = element.querySelector('input');
	input.focus();

	const submitBtn = element.querySelector('.submit');
	submitBtn.addEventListener('click', () => {
		if (!input.value) {
			return;
		}
		createItem();
		input.focus();
	});

	const createItem = () => {
		const itemText = input.value;

		const item = document.createElement('div');
		item.classList.add('notification', 'is-link');
		item.innerHTML = `
            ${itemText} 
			<button class="button is-small is-success">Done</button>
        `;

		element.appendChild(item);

		input.value = '';

		const doneButtons = document.querySelectorAll('.button.is-small.is-success');
		doneButtons.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				e.target.parentElement.remove();
			});
		});
	};
};
