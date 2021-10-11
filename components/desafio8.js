//traer selectores
const resultado = document.querySelector('#resultado');
const resultadoAnterior = document.querySelector('#resultadoAnterior');
const uno = document.querySelector('#uno');
const dos = document.querySelector('#dos');
const tres = document.querySelector('#tres');
const cuatro = document.querySelector('#cuatro');
const cinco = document.querySelector('#cinco');
const seis = document.querySelector('#seis');
const siete = document.querySelector('#siete');
const ocho = document.querySelector('#ocho');
const nueve = document.querySelector('#nueve');
const cero = document.querySelector('#cero');
const suma = document.querySelector('#suma');
const resta = document.querySelector('#resta');
const multiplicacion = document.querySelector('#multiplicar');
const division = document.querySelector('#division');
const punto = document.querySelector('#punto');
const reset = document.querySelector('#reset');
const igual = document.querySelector('#igual');
const borrar = document.querySelector('#borrar');

//variables
let primeraVariable;
let segundaVariable;

//limpiar html
const limpiar = () => {
	resultado.textContent = '';
};

const resolver = () => {
	valor = 0;
	switch (operacion) {
		case '+':
			valor = parseFloat(primeraVariable) + parseFloat(segundaVariable);
			break;
		case '-':
			valor = parseFloat(primeraVariable) - parseFloat(segundaVariable);
			break;
		case '*':
			valor = parseFloat(primeraVariable) * parseFloat(segundaVariable);
			break;
		case '/':
			valor = parseFloat(primeraVariable) / parseFloat(segundaVariable);
			break;
	}

	resultado.textContent = valor;
};

uno.addEventListener('click', () => {
	resultado.textContent = resultado.textContent + '1';
});

dos.addEventListener('click', () => {
	resultado.textContent = resultado.textContent + '2';
});

tres.addEventListener('click', () => {
	resultado.textContent = resultado.textContent + '3';
});

cuatro.addEventListener('click', () => {
	resultado.textContent = resultado.textContent + '4';
});

cinco.addEventListener('click', () => {
	resultado.textContent = resultado.textContent + '5';
});

seis.addEventListener('click', () => {
	resultado.textContent = resultado.textContent + '6';
});

siete.addEventListener('click', () => {
	resultado.textContent = resultado.textContent + '7';
});

ocho.addEventListener('click', () => {
	resultado.textContent = resultado.textContent + '8';
});

nueve.addEventListener('click', () => {
	resultado.textContent = resultado.textContent + '9';
});

cero.addEventListener('click', () => {
	resultado.textContent = resultado.textContent + '0';
});

punto.addEventListener('click', () => {
	resultado.textContent = resultado.textContent + '.';
});

suma.addEventListener('click', () => {
	primeraVariable = resultado.textContent;
	operacion = '+';
	limpiar();
});

resta.addEventListener('click', () => {
	primeraVariable = resultado.textContent;
	operacion = '-';
	limpiar();
});

multiplicacion.addEventListener('click', () => {
	primeraVariable = resultado.textContent;
	operacion = '*';
	limpiar();
});

division.addEventListener('click', () => {
	primeraVariable = resultado.textContent;
	operacion = '/';
	limpiar();
});

igual.addEventListener('click', () => {
	segundaVariable = resultado.textContent;
	resolver();
});

reset.addEventListener('click', () => {
	(resultado.textContent = ''), (primeraVariable = 0), (segundaVariable = 0), (operacion = '');
});

borrar.addEventListener('click', () => {
	resultado.textContent = resultado.textContent.slice(0, -1);
});
