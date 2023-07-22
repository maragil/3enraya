"use strict";

import random from "./random.js";
import hideModal from "./hideModal.js";

var player1;
var newGame = false;

const raffleGame = document.querySelector('#randomGame');
const start = document.querySelector('#start');

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

    }
)