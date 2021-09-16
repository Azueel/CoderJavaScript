let liga = prompt('Ingresa tu liga en League of Legends');

liga = liga.toLowerCase();

if (liga === 'challenger') {
	console.log(
		'Felicidades perdiste 5 años de tu vida tryhardeando pero lo lograste'
	);
} else if (liga === 'gran master' || liga === 'master') {
	console.log('Todavia no sos Challenger y ventila un poco la habitacion');
} else if (liga === 'diamante') {
	console.log('Sos la peor escoria de este juego');
} else if (liga === 'platino' || liga === 'oro') {
	console.log(
		'estas en el promedio de tener algo de vida y jugar unas partiditas al dia, Tenes derecho de reirte de los platitas'
	);
} else if (liga === 'plata') {
	console.log('jajaja como vas a ser plata, ¿Andres sos vos?');
} else if (liga === 'bronce' || liga === 'hierro') {
	console.log(
		'Arruinas tu vida en este juego y encima jugas vayne jg con ignite'
	);
} else {
	console.log(
		'Veo que pusiste cualquier cosa, te felicito por no jugar a este juego, te haces un gran favor'
	);
}
