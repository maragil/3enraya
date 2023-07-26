//Función que determina el ganador de la partida:

//código Player 1:

function winPlayer1 (score1) {

    const player1Img = document.getElementById('img_player1');
    player1Img.src = './images/feliz.png';
    player1Img.style.width = '80%';

    const player2Img = document.getElementById('img_player2');
    player2Img.src = './images/triste.png';
    player2Img.style.width = '80%';

    document.getElementById('player1_title').style.fontSize = '18px';
    document.getElementById('player2_title').style.fontSize = '18px';

    const score1 = document.getElementById('score1');//cambia el 0 por el valor que le indiquemos
    const score1m = document.getElementById('score_1m');//score versión mobile
    score1.innerText = score1; //se le pasan los puntos q nos hemos traido de const score1
    score1m.innerText = score1;

//activar el btn de nuevo juego
    const newGame = document.getElementById('newGame');
    newGame.disabled = false;
    newGame.style.backgroundColor = 'cornsilk';
    newGame.style.cursor = 'pointer';

    //limpiar los botones
    for(var i = 1; i < 10; i++){
        let string = 'button_active'+i;
        document.getElementById(string).disabled = true; //coger los elementos por el id basados en este string para que desactive los botones.
    }
}


//código Player 2:
function winPlayer2 (score2) {

    const player1Img = document.getElementById('img_player1');
    player1Img.src = './images/triste.png';
    player1Img.style.width = '80%';

    const player2Img = document.getElementById('img_player2');
    player2Img.src = './images/feliz.png';
    player2Img.style.width = '80%';

    document.getElementById('player1_title').style.fontSize = '18px';
    document.getElementById('player2_title').style.fontSize = '18px';

    const score2 = document.getElementById('score2');//cambia el 0 por el valor que le indiquemos
    const score2m = document.getElementById('score_2m');//score versión mobile
    score2.innerText = score2; //se le pasan los puntos q nos hemos traido de const score1
    score2m.innerText = score2;

//activar el btn de nuevo juego
    const newGame = document.getElementById('newGame');
    newGame.disabled = false;
    newGame.style.backgroundColor = 'cornsilk';
    newGame.style.cursor = 'pointer';

    //limpiar los botones
    for(var i = 1; i < 10; i++){
        let string = 'button_active'+i;
        document.getElementById(string).disabled = true; //coger los elementos por el id basados en este string para que desactive los botones.
    }
}

export {winPlayer1, winPlayer2};