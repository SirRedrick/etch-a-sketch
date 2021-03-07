(function () {
	const root = document.getElementById('root');
	const reset = document.getElementById('reset');

	populateGrid(16);

	root.addEventListener('mouseover', ({ target }) => {
		if (!target.classList.contains('square')) return;

		target.style.backgroundColor = '#000';
		console.log(typeof target.style.backgroundColor);
	});

	reset.addEventListener('click', () => {
		let result = +prompt('Set the grid size', '16');
		while (result > 100 || result <= 0 || Number.isNaN(result)) {
			result = +prompt('Choose a valid value', '16');
		}

		root.innerHTML = '';
		populateGrid(result);
	});

	function populateGrid(size) {
		for (let i = 0; i < size * size; i++) {
			root.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
			root.style.gridTemplateRows = `repeat(${size}, 1fr)`;

			const div = document.createElement('div');
			div.classList.add('square');
			root.appendChild(div);
		}
	}

	// console.log(root);
})();
