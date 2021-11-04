const url = 'https://deckofcardsapi.com/api/deck/new/draw/?deck_count=6&count=312';

$.get(url, ({ cards }, estado) => {
	if (estado == 'success') {
		console.log(cards);

		$('#btnMostrar').on('click', () => {
			Object.values(cards).forEach(({ image, suit, value }) => {
				$('body').append(`<div class="d-flex">
									<img  src="${image}"/>
									<p>${value}</p>
									<p class="ms-5">${suit}</p>
								</div>`);
			});
		});
	}
});
