//animacion
$('#title').animate(
	{
		height: '100px',
	},
	5000,
	function () {
		console.log('terminado');
	}
);

//efectos
$('#btn1').on('click', () => {
	$('#argentina').fadeIn(3000);
	$('#btn1').prop('disabled', true);
	setTimeout(() => {
		$('#argentina').fadeOut(3000);
		$('#btn1').prop('disabled', false);
	}, 5000);
});

$('#btn2').on('click', () => {
	$('#alemania').fadeIn(3000);
	$('#btn2').prop('disabled', true);
	setTimeout(() => {
		$('#alemania').fadeOut(3000);
		$('#btn2').prop('disabled', false);
	}, 5000);
});

$('#btn3').on('click', () => {
	$('#italia').slideToggle(3000);
	$('#btn3').prop('disabled', true);
	setTimeout(() => {
		$('#italia').slideToggle(3000);
		$('#btn3').prop('disabled', false);
	}, 5000);
});

$('#btn4').on('click', () => {
	$('#españa').fadeIn(3000);
	$('#btn4').prop('disabled', true);
	setTimeout(() => {
		$('#españa').fadeOut(3000);
		$('#btn4').prop('disabled', false);
	}, 5000);
});

$('#btn5').on('click', () => {
	$('#fr').slideToggle(3000);
	$('#btn5').prop('disabled', true);
	setTimeout(() => {
		$('#fr').slideToggle(3000);
		$('#btn5').prop('disabled', false);
	}, 5000);
});

$('#btn6').on('click', () => {
	$('#camerun').slideToggle(3000);
	$('#btn6').prop('disabled', true);
	setTimeout(() => {
		$('#camerun').slideToggle(3000);
		$('#btn6').prop('disabled', false);
	}, 5000);
});

$('#btn7').on('click', () => {
	$('#rusia').fadeIn(3000);
	$('#btn7').prop('disabled', true);
	setTimeout(() => {
		$('#rusia').fadeOut(3000);
		$('#btn7').prop('disabled', false);
	}, 5000);
});

$('#btn8').on('click', () => {
	$('#holanda').fadeIn(3000);
	$('#btn8').prop('disabled', true);
	setTimeout(() => {
		$('#holanda').fadeOut(3000);
		$('#btn8').prop('disabled', false);
	}, 5000);
});
