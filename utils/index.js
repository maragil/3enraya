"use strict";

import random from "./random.js";
import hideModal from "./hideModal.js";
import { winPlayer1, winPlayer2 } from "./winner.js";
import { btn1 } from "./boardBtns.js";

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

const raffleGame = document.querySelector('#randomGame');
const start = document.querySelector('#start');

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



raffleGame.onclick = () => {
    player1 = random(newGame);
}

start.onclick = () =>{
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

    console.log(matrix); //este es el console que me marca undefined, y debería marcar las coord dnd se clica
}

