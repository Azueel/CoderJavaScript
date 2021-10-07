/////Piedra Papel o Tijera/////////

const game = document.querySelector('#game');
let mySelection = prompt('elige piedra, papel o tijera');
let demoArray = ['piedra', 'papel', 'tijera'];

const mezclarArray = (mezclar) => {
	mezclar.sort(() => Math.random() - 0.5);
};
mezclarArray(demoArray);

const StartGame = (playEnemiga) => {
	switch (mySelection) {
		case 'piedra':
			if (playEnemiga == 'papel') {
				game.innerHTML = `
                    <p class="text-center mt-5">Perdiste</p> 
                    <div class="d-flex justify-content-center">
                        <img src="/img/piedra.png" alt="" class="lolImg" />            
                        <p class="px-5"> < </p> 
                        <img src="/img/papel.jpg" alt="" class="lolImg" />
                    </div>
                `;
			} else if (playEnemiga == 'piedra') {
				game.innerHTML = `
                    <p class="text-center mt-5">Empataste</p>
                    <div class="d-flex justify-content-center">
                        <img src="/img/piedra.png" alt="" class="lolImg" />
                        <p class="px-5"> = </p> 
                        <img src="/img/piedra.png" alt="" class="lolImg" />
                    </div>
                    
                `;
			} else {
				game.innerHTML = `
                    <p class="text-center mt-5">Ganaste</p>
                    <div class="d-flex justify-content-center">
                        <img src="/img/piedra.png" alt="" class="lolImg" />
                        <p class="px-5"> > </p> 
                        <img src="/img/tijera.png" alt="" class="lolImg" />
                    </div>
                    
                `;
			}
			break;
		case 'papel':
			if (playEnemiga == 'papel') {
				game.innerHTML = `
                <p class="text-center mt-5">Empataste</p>

                <div class="d-flex justify-content-center">
                    <img src="/img/papel.jpg" alt="" class="lolImg" />
                    <p class="px-5"> = </p>
                    <img src="/img/papel.jpg" alt="" class="lolImg" />
                </div>
                    
                `;
			} else if (playEnemiga == 'piedra') {
				game.innerHTML = `
                    <p class="text-center mt-5">Ganaste</p>

                    <div class="d-flex justify-content-center">
                        <img src="/img/papel.jpg" alt="" class="lolImg" />
                        <p class="px-5"> > </p>
                        <img src="/img/piedra.png" alt="" class="lolImg" />
                    </div>
                `;
			} else {
				game.innerHTML = `
                    <p class="text-center mt-5">Perdiste</p>

                    <div class="d-flex justify-content-center">
                        <img src="/img/papel.jpg" alt="" class="lolImg" />
                        <p class="px-5"> < </p>
                        <img src="/img/tijera.png" alt="" class="lolImg" />
                    </div>
                `;
			}
			break;

		case 'tijera':
			if (playEnemiga == 'tijera') {
				game.innerHTML = `
                    <p class="text-center mt-5">Empataste</p>
                    
                    <div class="d-flex justify-content-center">
                        <img src="/img/tijera.png" alt="" class="lolImg" /> 
                        <p class="px-5"> = </p>
                        <img src="/img/tijera.png" alt="" class="lolImg" />
                    </div>
                `;
			} else if (playEnemiga == 'papel') {
				game.innerHTML = `
                    <p class="text-center mt-5">Ganaste</p>
                    <div class="d-flex justify-content-center">
                        <img src="/img/tijera.png" alt="" class="lolImg" />
                        <p class="px-5"> > </p>
                        <img src="/img/papel.jpg" alt="" class="lolImg" />
                    </div>
                `;
			} else {
				game.innerHTML = `
                    <p class="text-center mt-5">Perdiste</p>

                    <div class="d-flex justify-content-center">
                        <img src="/img/tijera.png" alt="" class="lolImg" />
                        <p class="px-5"> < </p>
                        <img src="/img/piedra.png" alt="" class="lolImg" />
                    </div>
                `;
			}
			break;

		default:
			game.innerHTML = `
                    <h3 class="text-center">Dato ingresado erroneo, por favor escrbir la respuesta en Minuscula</h3>	
                 `;
			break;
	}
};

StartGame(demoArray[0]);
