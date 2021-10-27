$(document).ready(function () {
	const text = $('#text');

	$('#dark').on('click', () => {
		text.removeClass();
		text.addClass('text-white bg-dark fs-1 my-5 p-3');
	});

	$('#light').on('click', () => {
		text.removeClass();
		text.addClass('text-dark bg-white fs-1 my-5 p-3');
	});

	$('#colors').on('click', () => {
		text.removeClass();
		text.addClass('text-danger bg-primary fs-1 my-5 p-3');
	});
});
