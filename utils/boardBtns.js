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
    matrix[0][0] = player1 ? 'x' : 'o'; //si player1 es verdadero, coloca la 'x' en la 1ª pos de la matriz[0], pero si es falso, coloca la 'o' en esa pos en lugar de la 'x'.

    //llamamos a la F validate
    winner = validate(player1, matrix, selectionCounter); //devuelve algo si hay ganador o no o un empate


    if(winner === 0){//si winner es 0, es xq el juego todavía está en marcha
        player1 = !player1; //negamos player1 (xq si player1 no está jugando es xq tiene que estar jugando player2)
        turnGame(player1) //turnGame modifica los asides si el jugador tiene el turno o no
    }

    return (player1, matrix, winner)    //player1 con su nuevo estado: true o false
                                        //la matriz actualizada
                                        //winner si hay ganador con su estados: 0, 1, 2 o 3.
}

export {btn1};

