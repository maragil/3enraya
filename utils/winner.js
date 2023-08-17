//Función que determina el ganador de la partida:

//código Player 1:
function winPlayer1 (score1) {

    const player1Img = document.getElementById('img_player1');
    player1Img.src = './images/feliz.png';
    player1Img.style.width = '120%';

    const player2Img = document.getElementById('img_player2');
    player2Img.src = './images/triste.png';
    player2Img.style.width = '80%';

    document.getElementById('player1_title').style.fontSize = '18px';
    document.getElementById('player2_title').style.fontSize = '18px';

    const score_1 = document.getElementById('score1');
    const score1m = document.getElementById('score_1m');
    score_1.innerText = score1;
    score1m.innerText = score1;

    //activar el btn de nuevo juego
    const newGame = document.getElementById('newGame');
    newGame.disabled = false;
    newGame.style.backgroundColor = 'cornsilk';
    newGame.style.cursor = 'pointer';

    //limpiar los botones
    for(var i = 1; i < 10; i++){
        let string = 'button_active'+i;
        document.getElementById(string).disabled = true;
    }
}


//código Player 2:
function winPlayer2 (score2) {

    const player1Img = document.getElementById('img_player1');
    player1Img.src = './images/triste.png';
    player1Img.style.width = '80%';

    const player2Img = document.getElementById('img_player2');
    player2Img.src = './images/feliz.png';
    player2Img.style.width = '120%';

    document.getElementById('player1_title').style.fontSize = '18px';
    document.getElementById('player2_title').style.fontSize = '18px';

    const score_2 = document.getElementById('score2');
    const score2m = document.getElementById('score_2m');
    score_2.innerText = score2;
    score2m.innerText = score2;

    //activar el btn de nuevo juego
    const newGame = document.getElementById('newGame');
    newGame.disabled = false;
    newGame.style.backgroundColor = 'cornsilk';
    newGame.style.cursor = 'pointer';

    //limpiar los botones
    for(var i = 1; i < 10; i++){
        let string = 'button_active'+i;
        document.getElementById(string).disabled = true;
    }
}

export {winPlayer1, winPlayer2};