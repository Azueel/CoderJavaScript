/////CoderSino////////

console.log('Bienvenido al CoderCasino');

const name = prompt('Ingrese su Nombre');

let monto = 10000;

const num = Math.random();

const num2 = num * 10;

const valorRuleta = Math.ceil(num2);

let continuar = prompt('GIRA LA RULETA');

let tablaRanking = JSON.parse(localStorage.getItem('datos'));

class ranking {
	constructor(name, monto) {
		(this.name = name), (this.monto = monto);
	}
}

const abandono = (monto) => {
	console.log(`Vuelva Pronto, Retiraste: ${monto}`);
};

const ruleta = (monto, continuar, num, num2, valorRuleta, name) => {
	while (continuar != 'no' && monto >= 0) {
		switch (valorRuleta) {
			case 1:
				monto = monto + 2500;
				console.log('SALIO EL: ', valorRuleta);
				console.log(`felicidades ganaste $2500, tu monto es de ${monto}`);
				break;
			case 2:
				monto = monto / 2;
				console.log('SALIO EL: ', valorRuleta);
				console.log(`Ups Perdiste la mitad de tu monto, tu monto es de ${monto}`);
				break;
			case 3:
				monto = monto;
				console.log('SALIO EL: ', valorRuleta);
				console.log(`Ni fu ni Fa el 3 no hace nada, tu monto se mantiene igual ${monto}`);
				break;
			case 4:
				monto = monto - 5000;
				console.log('SALIO EL: ', valorRuleta);
				console.log(`Paso el peronismo y te robo 5000 pesos, tu monto es de ${monto}`);
				break;
			case 5:
				monto = monto * 3;
				console.log('SALIO EL: ', valorRuleta);
				console.log(
					`Felicidades Ganaste el triple, yo que vos me retiro porque la proxima perdes todo seguro, tu monto actual es de ${monto}`
				);
				break;
			case 6:
				monto = monto + 850;
				console.log('SALIO EL: ', valorRuleta);
				console.log(
					`Ganaste $850 Para que te compres 40 alfajores fulbito, tu monto actual es de ${monto}`
				);
				break;
			case 7:
				monto = monto - 1200;
				console.log('SALIO EL: ', valorRuleta);
				console.log(
					`Ganaste 300, pero te cobramos 500 de iva, 600 de impuesto pais, y ademas debes 1 mes del monotributo, perdiste $1200 pesos, tu monto actual es de: ${monto}`
				);
				break;
			case 8:
				monto = monto / 4;
				console.log('SALIO EL: ', valorRuleta);
				console.log(`Perdiste 1/4 de tu monto , tu monto actual es de ${monto}`);
				break;
			case 9:
				monto = monto + 1000;
				console.log('SALIO EL: ', valorRuleta);
				console.log(
					`Ganaste 1000 pesitos, hoy no comes polenta, tu monto actual es de ${monto}`
				);
				break;
			case 10:
				monto = monto - 9000;
				console.log('SALIO EL: ', valorRuleta);
				console.log(`Deleteado Pa -$9000 , tu monto actual es de  ${monto}`);
				break;

			default:
				console.log('error');
				break;
		}
		continuar = prompt('Escribe "no" si deseas retirarte, continuar si deseas seguir');

		num = Math.random();

		num2 = num * 10;
		valorRuleta = Math.ceil(num2);
	}
	abandono(monto);

	let jugador = new ranking(name, monto);
	tablaRanking.push(jugador);
	localStorage.setItem('datos', JSON.stringify(tablaRanking));
};

ruleta(monto, continuar, num, num2, valorRuleta, name);

console.log('******************RANKING DE MAS GANADORES***********************');
tablaRanking.sort((a, b) => {
	if (a.monto > b.monto) {
		return -1;
	}
	if (a.monto < b.monto) {
		return 1;
	}
	return 0;
});

tablaRanking.map(({ monto, name }) => {
	console.log(`${name}: $${monto}`);
});
