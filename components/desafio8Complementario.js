const alumnoRegular = document.querySelector('#submitForm');
const error = document.querySelector('#error');
const listaDesaprobados = document.querySelector('#listaDesaprobados');
const listaAprobados = document.querySelector('#listaAprobados');

let camada = [];
let nombre;
let apellido;
let nota;
let regularidad;

class Alumnos {
	constructor(nombre, apellido, nota) {
		(this.nombre = nombre), (this.apellido = apellido), (this.nota = nota);
	}
}

alumnoRegular.addEventListener('submit', (e) => {
	e.preventDefault();
	nombre = document.querySelector('#nombre').value;
	apellido = document.querySelector('#apellido').value;
	nota = document.querySelector('#nota').value;

	if (nombre == '' || apellido == '' || nota == '' || nota <= 0 || nota > 10) {
		error.textContent = 'Algun Campo es Invalido';
		error.classList.add('bg-danger', 'p-1', 'text-center', 'w-25', 'ms-4', 'text-white');
	} else {
		error.remove();
		alumnoRegular.reset();
		regularidad = new Alumnos(nombre, apellido, nota);
		camada.push(regularidad);
		console.log(camada);
		imprimirResultados();
	}
});

const imprimirResultados = () => {
	camada.map(({ nombre, apellido, nota }) => {
		if (nota <= 5) {
			listaDesaprobados.innerHTML = `<li class="ms-5 fs-3 mt-3">${nombre} ${apellido} <span class="text-danger">${nota}</span></li>`;
		} else {
			listaAprobados.innerHTML = `<li class="ms-2 fs-3 mt-3">${nombre} ${apellido} <span class="text-success">${nota}</span></li>`;
		}
	});
};
