//modifica apariencia del jugador q tiene el turno

function turnGame(player1) {

    if(player1 === true){

        const imgPlayer1 = document.getElementById('img_player1');
        imgPlayer1.src = './images/pensando.png';
        imgPlayer1.style.width = '120%';

        const imgPlayer2 = document.getElementById('img_player2');
        imgPlayer2.src = './images/esperando.png';
        imgPlayer2.style.width = '80%';

        document.getElementById('player1_title').style.fontSize = '30px';

        document.getElementById('player2_title').style.fontSize = '18px';

    }else{

        const imgPlayer1 = document.getElementById('img_player1');
        imgPlayer1.src = './images/esperando.png';
        imgPlayer1.style.width = '80%';

        const imgPlayer2 = document.getElementById('img_player2');
        imgPlayer2.src = './images/pensando.png';
        imgPlayer2.style.width = '120%';

        document.getElementById('player1_title').style.fontSize = '18px';

        document.getElementById('player2_title').style.fontSize = '30px';
    }
}

export default turnGame;
