"use strict";

import random from "./random.js";
import hideModal from "./hideModal.js";

var player1;
var newGame = false;

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

    clicksCounter();

    points();
}

