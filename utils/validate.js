var winner = 0;
var gamesNumber = 0;

function validate(player1, matrix, selectionCounter){

    let symbol;

    if(gamesNumber === 1){
        winner = 0;
        gamesNumber = 0;
    }

    if(player1){
        symbol = 'x';
    }else{
        symbol = 'o';
    }


    //Primera fila
    if( symbol === matrix[0][0] && symbol === matrix[0][1] && symbol === matrix[0][2] ){

        if(symbol === 'x'){
            winner = 1;
            gamesNumber +=1;

        }else if(symbol === 'o'){
            winner = 2;
            gamesNumber +=1;

        }else{
            winner = 0;

        }

    }

    //Segunda fila
    else if( symbol === matrix[1][0] && symbol === matrix[1][1] && symbol === matrix[1][2] ){

        if(symbol === 'x'){
            winner = 1;
            gamesNumber +=1;

        }else if(symbol === 'o'){
            winner = 2;
            gamesNumber +=1;

        }else{
            winner = 0;

        }

    }

    //Tercera fila
    else if( symbol === matrix[2][0] && symbol === matrix[2][1] && symbol === matrix[2][2] ){

        if(symbol === 'x'){
            winner = 1;
            gamesNumber +=1;

        }else if(symbol === 'o'){
            winner = 2;
            gamesNumber +=1;

        }else{
            winner = 0;

        }

    }

    //Primera columna
    else if( symbol === matrix[0][0] && symbol === matrix[1][0] && symbol === matrix[2][0] ){

        if(symbol === 'x'){
            winner = 1;
            gamesNumber +=1;

        }else if(symbol === 'o'){
            winner = 2;
            gamesNumber +=1;

        }else{
            winner = 0;

        }

    }

    //Segunda columna
    else if( symbol === matrix[0][1] && symbol === matrix[1][1] && symbol === matrix[2][1] ){

        if(symbol === 'x'){
                winner = 1;
                gamesNumber +=1;

        }else if(symbol === 'o'){
                winner = 2;
                gamesNumber +=1;

        }else{
                winner = 0;

        }

    }

    //Tercera columna
    else if( symbol === matrix[0][2] && symbol === matrix[1][2] && symbol === matrix[2][2] ){

        if(symbol === 'x'){
            winner = 1;
            gamesNumber +=1;

        }else if(symbol === 'o'){
            winner = 2;
            gamesNumber +=1;

        }else{
            winner = 0;

        }

    }


    //Diagonal 1
    else if( symbol === matrix[0][0] && symbol === matrix[1][1] && symbol === matrix[2][2] ){

        if(symbol === 'x'){
            winner = 1;
            gamesNumber +=1;

        }else if(symbol === 'o'){
            winner = 2;
            gamesNumber +=1;

        }else{
            winner = 0;

        }

    }

    //Diagonal 2
    else if( symbol === matrix[0][2] && symbol === matrix[1][1] && symbol === matrix[2][0] ){

        if(symbol === 'x'){
            winner = 1;
            gamesNumber +=1;

        }else if(symbol === 'o'){
            winner = 2;
            gamesNumber +=1;

        }else{
            winner = 0;

        }

    }


    if(selectionCounter === 9){
        const newGame = document.getElementById('newGame');
        newGame.disable = false;
        newGame.style.backgroundColor = 'cornsilk';
        newGame.style.cursor = 'pointer';
        winner = 3; //Empate
    }

    return winner;
}

export default validate;
