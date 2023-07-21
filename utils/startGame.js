import turnGame from "./turnGame.js";

function startGame (newGame, player1) {

    var i; //para hacer el barrido

    if(!newGame){ //si nuevo juego es falso, prepara la pimera partida, iterando en los botones del tablero, activándolos

        for(i=1; i<10; i++){
            let string = 'button_active' + i;
            document.getElementById(string).style.display = 'block';
        }

    } else { //en caso de q no sea nuevo juego

        for(i=1; i<10; i++){
            let string = 'button_active' + i;
            document.getElementById(string).disabled = 'false';
            document.getElementById(string).style.cursor = 'pointer';
        }

        newGame = false;

    }

    turnGame(player1);

}

export default startGame;
