const listaAprobados = document.querySelector('#listaAprobados');

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

team.sort((a, b) => {
	if (a.division < b.division) {
		return -1;
	}
	if (a.division > b.division) {
		return 1;
	}
	return 0;
});

const allTeam = team.map(({ name, liga, division, linea }) => {
	listaAprobados.innerHTML = `<li>${name},${liga},${division},${linea}</li>`;
});
