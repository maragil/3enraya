import turnGame from "./turnGame.js";

function startGame (newGame, player1) {

    var i;

    if(!newGame){

        for(i=1; i<10; i++){
            let string = 'button_active' + i;
            document.getElementById(string).style.display = 'block';
        }

    } else {

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
