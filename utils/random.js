import startGame from "./startGame.js";

function random (newGame){

    var player1; //me permite retornar el valor y almacenarla en index.js: player1 = random(newGame);
    const randomMatch = Math.floor(Math.random()*2) + 1;
    const playerInit = document.getElementById("playerInit") //este id viene del index.html en la ventana modal

    if(randomMatch === 1){ //discriminar si el valor inicial es 1 o 2.
        playerInit.innerText = 'Inicia el Jugador 1';
        player1 = true;

    }else{

        playerInit.innerText = 'Inicia el Jugador 2';
        player1 = false;
    }

    let modal = document.querySelectorAll('.modal')[0]; //mostrar en el modal
    let modalContainer = document.querySelectorAll('.modal-container')[0]//selección de clase modal y modal-container

    modalContainer.style.opacity = '1'; //cambio de estilio de la ventana modal
    modalContainer.style.visibility = 'visible';
    modal.classList.toggle('modal-close'); //que le añada/quite la clase modal-close
    startGame(newGame, player1);

    const btnRandGame = document.getElementById('randomGame');
    btnRandGame.disable = true; //desabilitar el botón
    btnRandGame.style.backgroundColor = 'indigo'; //estilo al botón para q se vea inactivo
    btnRandGame.style.cursor = 'default'; //quitar el cursor pointer

    const btnReset = document.getElementById('reset'); //activar el btn reiniciar
    btnReset.disable = false; //activar el btn
    btnReset.style.backgroundColor = 'cornsilk'; //cambiar el color para q se vea inactivo
    btnReset.style.cursor = 'pointer';

    return player1;

}

export default random;
//exportamos la función para poder usarla en index.js