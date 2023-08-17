import turnGame from "./turnGame.js";
import validate from "./validate.js";

var winner = 0;

//hay q importar función por cada btn
function btn1 (player1, matrix, selectionCounter) { //es dnd se actualiza la matriz, donde se escriben las X o las O en cada btn

    const selectionBtn = document.getElementById('button_active1') //coloca X/O en la posición 0.0 de la matriz

    if(player1){
        selectionBtn.innerText = 'X'; //en el caso de q player1 esté activo, voy a colocar una x
        selectionBtn.style.color = 'crimson'; //X rojas

    }else{ //en el caso de que sea el player2
        selectionBtn.innerText = 'O';
        selectionBtn.style.color = 'darkblue'; //O azules
    }

    selectionBtn.disabled = true; //desabilitar el botón de la casilla que ya se ha presionado
    selectionBtn.style.cursor = 'default'; //desabilitar el cursor

    //Actualizar la matriz. Como esta es la posición 0.0, xq es el button_active1,
    matrix[0][0] = player1 ? 'x' : 'o'; //si player1 es verdadero, coloca la 'x' en la 1ª pos de la matriz[0], pero si es falso, coloca la 'o' en esa pos en lugar de la 'x'

    //llamamos a la F validate
    winner = validate(player1, matrix, selectionCounter); //devuelve algo si hay ganador(estado 1, si el ganador es el player 1, estado 2, si el ganador es el player 2)  o sigue el juego(estado 0), o un empate (estado 3)

    //llamamos a la función turn
    if(winner === 0){//si el esado de winner es 0, esq el juego todavía está en marcha
        player1 = !player1; //negamos player1 (xq si player1 no está jugando es xq tiene que estar jugando player2)
        turnGame(player1) //turnGame modifica los asides(imágenes) si el jugador tiene el turno o no
    }

    //retornamos los valores:
    return [player1, matrix, winner]    //player1 con su nuevo estado: true o false
                                        //la matriz actualizada --> matrix[0][0] = player1 ? 'x' : 'o';
                                        //winner si hay ganador con su estados: 0, 1, 2 o 3.
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

