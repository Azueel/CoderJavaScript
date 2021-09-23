const numeros = () => {
	num1 = parseInt(prompt('ingresa un numero entero'));
	num2 = parseInt(prompt('ingresa un segundo numero entero'));
	multiplicar(num1, num2);
};

const multiplicar = (numero, numero2) => {
	let resultado = numero * numero2;
	mostrarResultado(resultado);
};

const mostrarResultado = (resultado) => {
	const total = `El resultado final es: ${resultado}`;
	console.log(total);
};

numeros();
