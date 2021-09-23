const time = document.querySelector('#time');
const btnStop = document.querySelector('#btnStop');
const btnStart = document.querySelector('#btnStart');
const fondo = document.querySelector('#fondo');
const audio = document.querySelector('#audio');

let count = 100;

btnStart.addEventListener('click', function () {
	startTime = setInterval(function () {
		count--;
		time.innerHTML = `Time: ${count}`;
		fondo.classList.remove('imagen');
		btnStart.disabled = true;
	}, 1000);
});

btnStop.addEventListener('click', function () {
	clearInterval(startTime);
	time.innerHTML = `Za Warudo!!!!!!!!`;
	fondo.classList.add('imagen');
	audio.play();
	btnStart.disabled = false;
});
