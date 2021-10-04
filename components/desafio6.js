class Lol {
	constructor(name, liga, division, linea) {
		(this.name = name), (this.liga = liga), (this.division = division), (this.linea = linea);
	}
}

let team = [];
const cantidad = 5;

const player = () => {
	do {
		alert('Por favor registra a tu equipo de 5');
		let name = prompt('ingresar nombre de invocador');
		let liga = prompt('ingresar tu liga');
		let division = parseInt(prompt('ingresar division'));
		let linea = prompt('ingresar Su linea');
		let jugador = new Lol(name, liga, division, linea);
		team.push(jugador);
	} while (team.length != cantidad);
};

player();

const allTeam = team.map(({ name, liga, division, linea }) => {
	console.log(
		`En la linea de ${linea} estara el jugador ${name} que se encuentra en la division de ${liga} ${division}`
	);
});
