import turnGame from "./turnGame.js";
import validate from "./validate.js";

var winner = 0;

//Importar función por cada btn
function btn1 (player1, matrix, selectionCounter) {

    const selectionBtn = document.getElementById('button_active1');

    if(player1){
        selectionBtn.innerText = 'X';
        selectionBtn.style.color = 'crimson';

    }else{
        selectionBtn.innerText = 'O';
        selectionBtn.style.color = 'darkblue';
    }

    selectionBtn.disabled = true;
    selectionBtn.style.cursor = 'default';

    matrix[0][0] = player1 ? 'x' : 'o';

    winner = validate(player1, matrix, selectionCounter);

    if(winner === 0){
        player1 = !player1;
        turnGame(player1);
    }

    //retornamos los valores:
    return [player1, matrix, winner]    //player1 con su nuevo estado: true o false
                                        //la matriz actualizada --> matrix[0][0] = player1 ? 'x' : 'o';
                                        //winner si hay ganador con sus estados: 0, 1, 2 o 3.
}

function btn2 (player1, matrix, selectionCounter) {

    const selectionBtn = document.getElementById('button_active2');

    if(player1){
        selectionBtn.innerText = 'X';
        selectionBtn.style.color = 'crimson';

    }else{
        selectionBtn.innerText = 'O';
        selectionBtn.style.color = 'darkblue';
    }

    selectionBtn.disabled = true;
    selectionBtn.style.cursor = 'default';

    matrix[0][1] = player1 ? 'x' : 'o';

    winner = validate(player1, matrix, selectionCounter);

    if(winner === 0){
        player1 = !player1;
        turnGame(player1)
    }

    return [player1, matrix, winner]
}

function btn3 (player1, matrix, selectionCounter) {

    const selectionBtn = document.getElementById('button_active3');

    if(player1){
        selectionBtn.innerText = 'X';
        selectionBtn.style.color = 'crimson';

    }else{
        selectionBtn.innerText = 'O';
        selectionBtn.style.color = 'darkblue';
    }

    selectionBtn.disabled = true;
    selectionBtn.style.cursor = 'default';

    matrix[0][2] = player1 ? 'x' : 'o';

    winner = validate(player1, matrix, selectionCounter);

    if(winner === 0){
        player1 = !player1;
        turnGame(player1)
    }

    return [player1, matrix, winner]
}

function btn4 (player1, matrix, selectionCounter) {

    const selectionBtn = document.getElementById('button_active4');

    if(player1){
        selectionBtn.innerText = 'X';
        selectionBtn.style.color = 'crimson';

    }else{
        selectionBtn.innerText = 'O';
        selectionBtn.style.color = 'darkblue';
    }

    selectionBtn.disabled = true;
    selectionBtn.style.cursor = 'default';

    matrix[1][0] = player1 ? 'x' : 'o';

    winner = validate(player1, matrix, selectionCounter);

    if(winner === 0){
        player1 = !player1;
        turnGame(player1)
    }

    return [player1, matrix, winner]
}

function btn5 (player1, matrix, selectionCounter) {

    const selectionBtn = document.getElementById('button_active5');

    if(player1){
        selectionBtn.innerText = 'X';
        selectionBtn.style.color = 'crimson';

    }else{
        selectionBtn.innerText = 'O';
        selectionBtn.style.color = 'darkblue';
    }

    selectionBtn.disabled = true;
    selectionBtn.style.cursor = 'default';

    matrix[1][1] = player1 ? 'x' : 'o';

    winner = validate(player1, matrix, selectionCounter);

    if(winner === 0){
        player1 = !player1;
        turnGame(player1)
    }

    return [player1, matrix, winner]
}

function btn6 (player1, matrix, selectionCounter) {

    const selectionBtn = document.getElementById('button_active6');

    if(player1){
        selectionBtn.innerText = 'X';
        selectionBtn.style.color = 'crimson';

    }else{
        selectionBtn.innerText = 'O';
        selectionBtn.style.color = 'darkblue';
    }

    selectionBtn.disabled = true;
    selectionBtn.style.cursor = 'default';

    matrix[1][2] = player1 ? 'x' : 'o';

    winner = validate(player1, matrix, selectionCounter);

    if(winner === 0){
        player1 = !player1;
        turnGame(player1)
    }

    return [player1, matrix, winner]
}

function btn7 (player1, matrix, selectionCounter) {

    const selectionBtn = document.getElementById('button_active7');

    if(player1){
        selectionBtn.innerText = 'X';
        selectionBtn.style.color = 'crimson';

    }else{
        selectionBtn.innerText = 'O';
        selectionBtn.style.color = 'darkblue';
    }

    selectionBtn.disabled = true;
    selectionBtn.style.cursor = 'default';

    matrix[2][0] = player1 ? 'x' : 'o';

    winner = validate(player1, matrix, selectionCounter);

    if(winner === 0){
        player1 = !player1;
        turnGame(player1)
    }

    return [player1, matrix, winner]
}

function btn8 (player1, matrix, selectionCounter) {

    const selectionBtn = document.getElementById('button_active8');

    if(player1){
        selectionBtn.innerText = 'X';
        selectionBtn.style.color = 'crimson';

    }else{
        selectionBtn.innerText = 'O';
        selectionBtn.style.color = 'darkblue';
    }

    selectionBtn.disabled = true;
    selectionBtn.style.cursor = 'default';

    matrix[2][1] = player1 ? 'x' : 'o';

    winner = validate(player1, matrix, selectionCounter);

    if(winner === 0){
        player1 = !player1;
        turnGame(player1)
    }

    return [player1, matrix, winner]
}

function btn9 (player1, matrix, selectionCounter) {

    const selectionBtn = document.getElementById('button_active9');

    if(player1){
        selectionBtn.innerText = 'X';
        selectionBtn.style.color = 'crimson';

    }else{
        selectionBtn.innerText = 'O';
        selectionBtn.style.color = 'darkblue';
    }

    selectionBtn.disabled = true;
    selectionBtn.style.cursor = 'default';

    matrix[2][2] = player1 ? 'x' : 'o';

    winner = validate(player1, matrix, selectionCounter);

    if(winner === 0){
        player1 = !player1;
        turnGame(player1)
    }

    return [player1, matrix, winner]
}

export  {   btn1, btn2, btn3,
            btn4, btn5, btn6,
            btn7, btn8, btn9    };

