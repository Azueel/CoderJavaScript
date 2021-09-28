class Lol {
	constructor(name, liga, division, puntos, linea) {
		(this.name = name),
			(this.liga = liga),
			(this.division = division),
			(this.puntos = puntos),
			(this.linea = linea);
	}

	rankedWin(puntos) {
		this.puntos = this.puntos + puntos;
		if (this.puntos >= 100) {
			if (this.liga === 'hierro' && this.division === 1 && this.puntos >= 100) {
				this.liga = 'bronce';
				this.division = 5;
			} else if (this.liga === 'bronce' && this.division === 1 && this.puntos >= 100) {
				this.liga = 'plata';
				this.division = 5;
			} else if (this.liga === 'plata' && this.division === 1 && this.puntos >= 100) {
				this.liga = 'oro';
				this.division = 5;
			} else if (this.liga === 'oro' && this.division === 1 && this.puntos >= 100) {
				this.liga = 'platino';
				this.division = 5;
			} else if (this.liga === 'platino' && this.division === 1 && this.puntos >= 100) {
				this.liga = 'diamante';
				this.division = 5;
			} else {
				console.log('Felicidades Division Subida');
			}

			this.puntos = this.puntos - 100;
			console.log(` Subiste a ${this.liga} ${this.division - 1} con ${this.puntos} puntos`);
			this.division = this.division - 1;
		} else {
			console.log(`eres ${this.liga} ${this.division} con ${this.puntos} puntos`);
		}
	}
}

const jugador1 = new Lol('shinobu', 'oro', 2, 50, 'supp');

console.log(jugador1.rankedWin(40));
console.log(jugador1.rankedWin(30));
console.log(jugador1.rankedWin(23));
console.log(jugador1.rankedWin(20));
console.log(jugador1.rankedWin(10));
