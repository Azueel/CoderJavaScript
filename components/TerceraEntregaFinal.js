$('#formLogin').on('submit', (e) => {
	e.preventDefault();
	const usuario = $('#user').val();
	const contraseña = $('#password').val();
	if (usuario == '' || contraseña == '') {
		$('#error').prepend(
			'<p  class="text-center bg-danger p-3 text-white fs-4">Campo Invalido</p>'
		);
		setTimeout(() => {
			$('#error').remove();
		}, 3000);
		return;
	} else {
		alert('Iniciaste sesión con el usuario ' + usuario);
		$('#persona').html(usuario);
		$('#login').hide('slow');
		$('#infoLogin').show('slow');
		return false;
	}
});

$('#cerrarSesion').on('click', () => {
	$('#user').val('');
	$('#password').val('');
	$('#login').show('slow');
	$('#infoLogin').hide('slow');
});
