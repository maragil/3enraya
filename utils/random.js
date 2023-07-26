import startGame from "./startGame.js";

function random (newGame){

    var player1;
    const randomMatch = Math.floor(Math.random()*2) + 1;
    const playerInit = document.getElementById("playerInit")

    if(randomMatch === 1){
        playerInit.innerText = 'Inicia el Jugador 1';
        player1 = true;

    }else{

        playerInit.innerText = 'Inicia el Jugador 2';
        player1 = false;
    }

    let modal = document.querySelectorAll('.modal')[0];
    let modalContainer = document.querySelectorAll('.modal-container')[0]

    modalContainer.style.opacity = '1';
    modalContainer.style.visibility = 'visible';
    modal.classList.toggle('modal-close');
    startGame(newGame, player1);

    const btnRandGame = document.getElementById('randomGame');
    btnRandGame.disable = true;
    btnRandGame.style.backgroundColor = 'indigo';
    btnRandGame.style.cursor = 'default';

    const btnReset = document.getElementById('reset');
    btnReset.disable = false;
    btnReset.style.backgroundColor = '$button-color';
    btnReset.style.cursor = 'pointer';

    return player1;

}

export default random;