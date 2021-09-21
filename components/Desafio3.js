let numero = parseInt(
	prompt(
		'Ingrese un Numero, lo cual sera sumado por sus siguientes 10 numeros'
	)
);
let sumaTotal = 0;

for (let i = numero; i <= numero + 10; i++) {
	sumaTotal = sumaTotal + i;
	console.log(sumaTotal);
}
