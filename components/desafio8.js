//traer selectores
const resultado = document.querySelector('#resultado');
const resultadoAnterior = document.querySelector('#resultadoAnterior');
const suma = document.querySelector('#suma');
const resta = document.querySelector('#resta');
const multiplicacion = document.querySelector('#multiplicar');
const division = document.querySelector('#division');
const punto = document.querySelector('#punto');
const reset = document.querySelector('#reset');
const igual = document.querySelector('#igual');
const borrar = document.querySelector('#borrar');
const numbers = document.querySelectorAll('.numeros');

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

numbers.forEach((numeros) => {
	numeros.addEventListener('click', () => {
		resultado.textContent = resultado.textContent + numeros.textContent;
	});
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
