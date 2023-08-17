"use strict";

import random from "./random.js";
import hideModal from "./hideModal.js";
import { winPlayer1, winPlayer2 } from "./winner.js";
import {    btn1, btn2, btn3,
            btn4, btn5, btn6,
            btn7, btn8, btn9 } from "./boardBtns.js";

var player1; //true or false
var newGame = false; //primer juego
var selectionCounter = 0;
var winner = 0; //estados: 0 1 2 3
var score1 = 0; //puntos player1
var score2 = 0; //puntos player2

var matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

const btnStart = document.querySelector('#start'); //btn start del modal
const btnRaffleGame = document.querySelector('#randomGame'); //btn randomGame
const btnNextGame = document.querySelector('#newGame'); //btn newGame
const btnReset = document.querySelector('#reset'); //btn reset

const activeBtn1 = document.querySelector('#button_active1');
const activeBtn2 = document.querySelector('#button_active2');
const activeBtn3 = document.querySelector('#button_active3');
const activeBtn4 = document.querySelector('#button_active4');
const activeBtn5 = document.querySelector('#button_active5');
const activeBtn6 = document.querySelector('#button_active6');
const activeBtn7 = document.querySelector('#button_active7');
const activeBtn8 = document.querySelector('#button_active8');
const activeBtn9 = document.querySelector('#button_active9');

function clicksCounter () {
    selectionCounter += 1;

    if(selectionCounter === 9){
        selectionCounter = 0;
    }
}

function points () {
    if(winner === 1){
        score1 += 1;
        winPlayer1(score1);
        selectionCounter = 0;

    }else if(winner === 2){
        score2 += 1;
        winPlayer2(score2);
        selectionCounter = 0;

    }else if(winner === 3){
        selectionCounter = 0;
    }
}

btnRaffleGame.onclick = () => {
    player1 = random(newGame);
}

btnStart.onclick = () =>{
    hideModal();
}

//ocultar el modal haciendo click en cualquier lugar de la pantalla, un evento en la ventana
window.addEventListener('click',
    function (ev) {

        let modal = document.querySelectorAll('.modal')[0];
        let modalContainer = document.querySelectorAll('.modal-container')[0];

        if(ev.target === modalContainer){
            modal.classList.toggle('modal-close');

            setTimeout(
                function () {
                    modalContainer.style.opacity = '0';
                    modalContainer.style.visibility = 'hidden';
                },

                1000)//retardo con el que se va a esconder el modal
        }

    }
);

activeBtn1.onclick = () => {
    var result = btn1(player1, matrix, selectionCounter);
    player1 = result[0];
    matrix= result[1];
    winner = result[2];

    clicksCounter();

    points();
}

activeBtn2.onclick = () => {
    var result = btn2(player1, matrix, selectionCounter);
    player1 = result[0];
    matrix= result[1];
    winner = result[2];

    clicksCounter();

    points();
}

activeBtn2.onclick = () => {
    var result = btn2(player1, matrix, selectionCounter);
    player1 = result[0];
    matrix= result[1];
    winner = result[2];

    clicksCounter();

    points();
}

activeBtn3.onclick = () => {
    var result = btn3(player1, matrix, selectionCounter);
    player1 = result[0];
    matrix= result[1];
    winner = result[2];

    clicksCounter();

    points();
}

activeBtn4.onclick = () => {
    var result = btn4(player1, matrix, selectionCounter);
    player1 = result[0];
    matrix= result[1];
    winner = result[2];

    clicksCounter();

    points();
}

activeBtn5.onclick = () => {
    var result = btn5(player1, matrix, selectionCounter);
    player1 = result[0];
    matrix= result[1];
    winner = result[2];

    clicksCounter();

    points();
}

activeBtn6.onclick = () => {
    var result = btn6(player1, matrix, selectionCounter);
    player1 = result[0];
    matrix= result[1];
    winner = result[2];

    clicksCounter();

    points();
}

activeBtn7.onclick = () => {
    var result = btn7(player1, matrix, selectionCounter);
    player1 = result[0];
    matrix= result[1];
    winner = result[2];

    clicksCounter();

    points();
}

activeBtn8.onclick = () => {
    var result = btn8(player1, matrix, selectionCounter);
    player1 = result[0];
    matrix= result[1];
    winner = result[2];

    clicksCounter();

    points();
}

activeBtn9.onclick = () => {
    var result = btn9(player1, matrix, selectionCounter);
    player1 = result[0];
    matrix= result[1];
    winner = result[2];

    clicksCounter();

    points();
}

btnNextGame.onclick = () => {
    winner = 0; //reinicia ganador
    selectionCounter = 0; //reinicia contador
    newGame = true; //xq en el 1º juego está en false

    matrix = [ //reiniciar la matriz
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    //habilitar el btnRandGame, para poder sortear la partida nuevamente.
    const btnRandGame = document.getElementById('randomGame');
    btnRandGame.disable = false;
    btnRandGame.style.backgroundColor = 'cornsilk';
    btnRandGame.style.cursor = 'pointer';

    //desabilitar el btn newGame
    const btnNewGame = document.getElementById('newGame');
    btnNewGame.disable = true;
    btnNewGame.style.backgroundColor = 'indigo';
    btnNewGame.style.cursor = 'default';

    //volver a las imágenes de inicio
    const imgPlayer1 = document.getElementById('img_player1');
    imgPlayer1.src = './images/inicio-partida.png';
    imgPlayer1.style.width = '80%';

    const imgPlayer2 = document.getElementById('img_player2');
    imgPlayer2.src = './images/inicio-partida.png';
    imgPlayer2.style.width = '80%';


    for(var i=1; i<10; i++){
        let string = 'button_active'+i;

        document.getElementById(string).innerText = null; //limpiar el tablero
        document.getElementById(string).disabled = true; //desactivar los btns
        document.getElementById(string).style.cursor = 'default'; //cursor desactivado
    }
}

btnReset.onclick = () => {
    let option = confirm('¿Estás seguro de reiniciar el juego?')

    if(option){
        location.reload(); //método de JS para recargar la web

    }
}